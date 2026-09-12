import { join } from "node:path";
import { access } from "node:fs/promises";

async function joinPath() {
  try {
    const filePath = join("documents", "notes", "node.txt");
    console.log(filePath);
    await access(`${filePath}`);
    console.log("File Exists! ✅");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Error: File Not Found! ❌");
    } else {
      console.log(`Error inspecting file: ${error.message}`);
    }
  }
}

joinPath();
