import { stat, access } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { resolve, join } from "node:path";

const rl = createInterface({ input, output });

async function locateFile() {
  try {
    const folder = await rl.question("Enter folder: ");
    const subfolder = await rl.question("Enter subfolder: ");
    const file = await rl.question("Enter file( with extension ): ");

    const filePath = join(folder, subfolder, file);

    await access(filePath);
    console.log("File Exists!✅");

    const absolutePath = resolve(folder, subfolder, file);
    const fileInfo = await stat(filePath);

    console.log("***** File Info *****");
    console.log(`Name: ${file}`);
    console.log(`Size: ${fileInfo.size} bytes`);
    console.log(`Type: ${fileInfo.isFile() ? "File" : "Directory"}`);
    console.log(`Crated: ${fileInfo.birthtime}`);
    console.log(`Modified: ${fileInfo.mtime}`);
    console.log(`Absolute Path: ${absolutePath}`);
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
}

locateFile();
