import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const projectPath = formData.get('projectPath') as string;
    const landscapeAssetId = formData.get('landscapeAssetId') as string;
    const type = formData.get('type') as string; // 'heightmap', 'rockmap', 'soil'
    const filename = formData.get('filename') as string;
    const file = formData.get('file') as File;

    if (!projectPath || !landscapeAssetId || !type || !filename || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let subDir = '';
    if (type === 'heightmap') subDir = 'heightmaps';
    else if (type === 'rockmap') subDir = 'rockmaps';
    else if (type === 'soil') subDir = 'soils';
    else {
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    // Construct the path: projectPath/landscapes/{assetId}/{subDir}/{filename}
    const targetDir = path.join(projectPath, 'landscapes', landscapeAssetId, subDir);
    const filePath = path.join(targetDir, filename);

    // Ensure directory exists
    if (!fs.existsSync(targetDir)) {
         fs.mkdirSync(targetDir, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Error saving landscape map:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
