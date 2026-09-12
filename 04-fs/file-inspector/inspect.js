import { createInterface } from "node:readline/promises";
import { access, stat } from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

async function inspectFile() {
  try {
    const name = await rl.question(
      "Enter file name with extension (like sample.txt, etc.) : ",
    );
    await access(`../${name}`);
    const info = await stat(`../${name}`);
    console.log("File Exists!💖");
    console.log("***** File Info *****");
    console.log(`Size: ${info.size} bytes`);
    console.log(`Type: ${info.isFile() ? "File" : "Folder"}`);
    console.log(`Created: ${info.birthtime}`);
    console.log(`Modified: ${info.mtime}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Error: That file does not exist.");
    } else {
      console.log(`Error inspecting file: ${error.message}`);
    }
  } finally {
    rl.close();
  }
}

inspectFile();
