import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  console.info("project single", projectId);

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { sessions: true },
    });
    if (project) {
      return NextResponse.json(project);
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching project' }, { status: 500 });
  }
}
