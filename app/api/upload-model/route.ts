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

    // Construct the path: projectPath/models/{filename}
    const modelsDir = path.join(projectPath, 'models');
    const filePath = path.join(modelsDir, filename);

    // Ensure directory exists
    if (!fs.existsSync(modelsDir)) {
         fs.mkdirSync(modelsDir, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Error saving model:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
