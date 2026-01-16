import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const projectPath = formData.get('projectPath') as string;
    const landscapeAssetId = formData.get('landscapeAssetId') as string;
    const filename = formData.get('filename') as string;
    const file = formData.get('file') as File;

    if (!projectPath || !landscapeAssetId || !filename || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Construct the path: projectPath/landscapes/{assetId}/heightmaps/{filename}
    // Note: projectPath is likely absolute from the engine's perspective.
    const filePath = path.join(projectPath, 'landscapes', landscapeAssetId, 'heightmaps', filename);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        // fs.mkdirSync(dir, { recursive: true });
        // If the directory doesn't exist, something is wrong with the project structure expectation
        // But we can try to create it.
        return NextResponse.json({ error: `Directory not found: ${dir}` }, { status: 404 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Error saving heightmap:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
