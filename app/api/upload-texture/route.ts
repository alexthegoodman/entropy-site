import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const projectPath = formData.get('projectPath') as string;
    const filename = formData.get('filename') as string;
    const file = formData.get('file') as File;

    if (!projectPath || !filename || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Construct the path: projectPath/textures/{filename}
    const texturesDir = path.join(projectPath, 'textures');
    const filePath = path.join(texturesDir, filename);

    // Ensure directory exists
    if (!fs.existsSync(texturesDir)) {
         fs.mkdirSync(texturesDir, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Error saving texture:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
