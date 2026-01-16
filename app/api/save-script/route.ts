import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { projectPath, filename, content } = json;

    if (!projectPath || !filename || content === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Construct the path: projectPath/scripts/{filename}
    const filePath = path.join(projectPath, 'scripts', filename);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        return NextResponse.json({ error: `Directory not found: ${dir}` }, { status: 404 });
    }

    fs.writeFileSync(filePath, content);

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Error saving script:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
