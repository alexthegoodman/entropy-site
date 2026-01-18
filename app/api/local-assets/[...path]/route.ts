import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import mime from "mime";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  // Only allow in development mode
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { path: pathSegments } = await params;
  
  // Construct the file path
  // The user specified: C:\Users\alext\Documents\CommonOS
  const DOCS_PATH = process.env.DOCS_PATH ? process.env.DOCS_PATH : "C:\\Users\\alext\\OneDrive\\Documents";
  const filePath = path.join(DOCS_PATH, "/CommonOS/midpoint/", ...pathSegments);

  // Security check: Ensure the resolved path is within the BASE_PATH
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(path.resolve(DOCS_PATH))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const fileHandle = await fs.open(resolvedPath, "r");
    const stat = await fileHandle.stat();

    if (!stat.isFile()) {
      await fileHandle.close();
      return new NextResponse("Not Found", { status: 404 });
    }

    const fileContent = await fileHandle.readFile();
    await fileHandle.close();

    const contentType = mime.getType(resolvedPath) || "application/octet-stream";

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": contentType,
        "Content-Length": stat.size.toString(),
        "Access-Control-Allow-Origin": "*", // Allow usage from other ports/domains if needed
      },
    });
  } catch (error) {
    console.error("Error serving local asset:", error);
    return new NextResponse("Not Found", { status: 404 });
  }
}
