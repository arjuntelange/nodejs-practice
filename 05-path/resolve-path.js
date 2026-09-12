import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { resolve } from "node:path";

const rl = createInterface({ input, output });

async function resolvePath() {
  try {
    const fileName = await rl.question("Enter file name: ");
    const filePath = resolve("documents", "notes", fileName);
    const filePath2 = resolve("/documents", "notes", fileName);

    console.log(`Absolute Path1: ${filePath}`);
    console.log(`Absolute Path2: ${filePath2}`);
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}

resolvePath();
