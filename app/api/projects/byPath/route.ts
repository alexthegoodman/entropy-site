import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');

  console.info("project byPath", path);

  if (!path) {
    return NextResponse.json({ error: 'Path query parameter is required' }, { status: 400 });
  }

  try {
    const project = await prisma.project.findUnique({
      where: { path: String(path) },
      include: { sessions: true },
    });
    if (project) {
      return NextResponse.json(project);
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching project by path' }, { status: 500 });
  }
}
