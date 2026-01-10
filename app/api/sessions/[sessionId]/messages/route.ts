import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { tools } from '@/lib/tools';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
    const { sessionId } = await params;
    const body = await request.json();
    const { role, content, tool_call_id, saved_state } = body;

    console.info("session send message", sessionId, role, content);

    try {
        await prisma.chatMessage.create({
            data: { sessionId, role, content, tool_call_id },
        });

        // Always get the latest messages to send to OpenAI
        const session = await prisma.chatSession.findUnique({
            where: { id: sessionId },
            include: { project: true },
        });

        if (!session) {
            return NextResponse.json({ error: 'Session not found' }, { status: 404 });
        }
        
        let savedState: any = saved_state;

        const chatMessages = await prisma.chatMessage.findMany({
            where: { sessionId },
            orderBy: { createdAt: 'asc' },
        });

        const openaiMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = chatMessages.map((msg: any) => {
            const message: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
                role: msg.role as any,
                content: msg.content,
            };
            if (msg.role === 'tool') {
                (message as unknown as OpenAI.Chat.Completions.ChatCompletionToolMessageParam).tool_call_id = msg.tool_call_id!;
            }
            return message;
        });

        openaiMessages.unshift({
            role: 'system',
            content: `You are a helpful assistant for the Entropy Engine. The current state of the project is described in the following JSON object: ${JSON.stringify(savedState, null, 2)}. Use the available tools to modify the project state based on the user's requests.`,
        });
        
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: openaiMessages,
            tools: tools,
            tool_choice: 'auto',
        });

        const responseMessage = completion.choices[0].message;

        console.info("responseMessage.tool_calls", responseMessage.tool_calls);

        // Save the assistant's response
        let savedAssistantMessage = await prisma.chatMessage.create({
            data: {
                sessionId,
                role: 'assistant',
                content: responseMessage.content ?? "",
                tool_calls: responseMessage.tool_calls as any, // Prisma needs `any` for JSON
            },
        }) as any;

        savedAssistantMessage.toolCalls = savedAssistantMessage.tool_calls;

        console.info("savedAssistantMessage", savedAssistantMessage);

        return NextResponse.json(savedAssistantMessage, { status: 201 });

    } catch (error) {
        console.error('Error handling chat message:', error);
        return NextResponse.json({ error: 'Error creating chat message or getting AI response' }, { status: 400 });
    }
}

export async function GET(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  console.info("session messages", sessionId);

  try {
    const messages = await prisma.chatMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching chat messages' }, { status: 500 });
  }
}
