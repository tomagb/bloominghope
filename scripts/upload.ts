import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const BUNNY_STORAGE_API_KEY = process.env.BUNNY_STORAGE_API_KEY;
const STORAGE_ZONE = 'bloominghope';
const BASE_URL = `https://storage.bunnycdn.com/${STORAGE_ZONE}`;

if (!BUNNY_STORAGE_API_KEY) {
  console.error('Error: BUNNY_STORAGE_API_KEY is not set in .env file');
  process.exit(1);
}

interface FileInfo {
  ObjectName: string;
  Path: string;
  IsDirectory: boolean;
  Length: number;
  LastChanged: string;
}

/**
 * List all files in Bunny Storage recursively
 */
async function listFilesRecursive(dirPath: string = '/'): Promise<FileInfo[]> {
  const files: FileInfo[] = [];
  const url = `${BASE_URL}${dirPath}`;

  try {
    const headers = new Headers();
    headers.set('AccessKey', BUNNY_STORAGE_API_KEY!);

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Directory not found: ${dirPath}`);
        return files;
      }
      throw new Error(`Failed to list files: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as FileInfo[];

    for (const file of data) {
      if (file.IsDirectory) {
        // Recursively list subdirectories
        const subDirPath = path.join(dirPath, file.ObjectName).replace(/\\/g, '/');
        const subFiles = await listFilesRecursive(subDirPath + '/');
        files.push(...subFiles);
      } else {
        // Add file info with full path
        const fullPath = path.join(dirPath, file.ObjectName).replace(/\\/g, '/');
        files.push({
          ...file,
          Path: fullPath,
        });
      }
    }
  } catch (error) {
    console.error(`Error listing files in ${dirPath}:`, error);
  }

  return files;
}

/**
 * Delete a file from Bunny Storage
 */
async function deleteFile(filePath: string): Promise<void> {
  const url = `${BASE_URL}${filePath}`;

  try {
    const headers = new Headers();
    headers.set('AccessKey', BUNNY_STORAGE_API_KEY!);

    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok && response.status !== 404) {
      throw new Error(`Failed to delete ${filePath}: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error deleting ${filePath}:`, error);
  }
}

/**
 * Upload a file to Bunny Storage
 */
async function uploadFile(localPath: string, remotePath: string): Promise<void> {
  const fileBuffer = fs.readFileSync(localPath);
  const mimeType = mime.lookup(localPath) || 'application/octet-stream';

  const url = `${BASE_URL}${remotePath}`;

  try {
    const headers = new Headers();
    headers.set('AccessKey', BUNNY_STORAGE_API_KEY!);
    headers.set('Content-Type', mimeType as string);

    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: fileBuffer,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error uploading ${remotePath}:`, error);
    throw error;
  }
}

/**
 * Get all files from local 'out' directory recursively
 */
function getLocalFiles(dirPath: string, basePath: string = ''): { localPath: string; remotePath: string }[] {
  const files: { localPath: string; remotePath: string }[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const remotePath = basePath ? `${basePath}/${entry.name}` : `/${entry.name}`;

    if (entry.isDirectory()) {
      files.push(...getLocalFiles(fullPath, remotePath));
    } else {
      files.push({
        localPath: fullPath,
        remotePath: remotePath.replace(/\\/g, '/'),
      });
    }
  }

  return files;
}

/**
 * Main upload function
 */
async function main() {
  const outDir = path.join(process.cwd(), 'out');

  if (!fs.existsSync(outDir)) {
    console.error(`Error: 'out' directory not found at ${outDir}`);
    console.error('Please run "npm run build" first');
    process.exit(1);
  }

  console.log('🚀 Starting Bunny CDN upload...\n');

  // Step 1: List existing files
  console.log('📋 Fetching existing files from Bunny CDN...');
  const existingFiles = await listFilesRecursive('/');
  console.log(`✅ Found ${existingFiles.length} existing files\n`);

  // Step 2: Delete existing files
  if (existingFiles.length > 0) {
    console.log('🗑️  Deleting existing files...');
    for (const file of existingFiles) {
      await deleteFile(file.Path);
    }
    console.log(`✅ Deleted ${existingFiles.length} files\n`);
  }

  // Step 3: Get local files
  console.log('📂 Reading local files from out/ directory...');
  const localFiles = getLocalFiles(outDir);
  console.log(`✅ Found ${localFiles.length} files to upload\n`);

  // Step 4: Upload files
  console.log('📤 Uploading files to Bunny CDN...');
  let uploadedCount = 0;
  let errorCount = 0;

  for (const file of localFiles) {
    try {
      await uploadFile(file.localPath, file.remotePath);
      uploadedCount++;
      process.stdout.write(
        `\r📤 Uploading files... (${uploadedCount}/${localFiles.length} uploaded)`,
      );
    } catch (error) {
      errorCount++;
      console.error(`\n❌ Failed to upload ${file.remotePath}`);
    }
  }

  console.log('\n');

  // Summary
  console.log('═══════════════════════════════════════');
  console.log(`✅ Upload Complete!`);
  console.log(`📊 Summary:`);
  console.log(`   • Successfully uploaded: ${uploadedCount} files`);
  console.log(`   • Failed uploads: ${errorCount} files`);
  console.log(`   • Total: ${localFiles.length} files`);
  console.log('═══════════════════════════════════════');

  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
