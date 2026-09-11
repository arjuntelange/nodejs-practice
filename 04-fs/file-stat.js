import fs from 'node:fs/promises';

async function getFileInfo() {
  try {
    const stats = await fs.stat('sample.txt');
    
    console.log('Name: sample.txt');
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Type: ${stats.isFile() ? 'File' : 'Folder'}`);
    console.log(`Created: ${stats.birthtime}`);
    console.log(`Modified: ${stats.mtime}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

getFileInfo();
