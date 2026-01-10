import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  console.info("sessions", projectId);

  try {
    const session = await prisma.chatSession.create({
      data: { projectId },
    });
    return NextResponse.json(session, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating chat session' }, { status: 400 });
  }
}
