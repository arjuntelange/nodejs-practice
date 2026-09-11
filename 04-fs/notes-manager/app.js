import fs from "node:fs/promises";
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createNotes() {
  const title = await rl.question("Enter Note Title: ");
  const content = await rl.question("Enter Note Content: ");

  try {
    await fs.writeFile(`notes/${title}.txt`, content);
    console.log("Note Created Successfully!🎉");
  } catch (error) {
    console.log("Error occurred during file creation! Error: ", error);
    return;
  }
}

async function readNotes() {
  const title = await rl.question("Enter Note Title: ");

  try {
    const data = await fs.readFile(`notes/${title}.txt`, "utf-8");
    console.log(data);
  } catch (error) {
    console.log("Error occurred during file reading! Error: ", error);
    return;
  }
}

async function appendFile() {
  const title = await rl.question("Enter Note Title: ");
  const data = await rl.question("Enter content to update: ");

  try {
    await fs.appendFile(`notes/${title}.txt`, `\n${data}`);
    console.log("Note Updated Successfully!🎉");
  } catch (error) {
    console.log("Error occurred during file updating! Error: ", error);
    return;
  }
}

async function deleteNote() {
  const title = await rl.question("Enter Note to Delete: ");

  try {
    await fs.unlink(`notes/${title}.txt`);
    console.log("Note Deleted Successfully!🎉");
  } catch (error) {
    console.log("Error occurred during file deletion! Error", error);
    return;
  }
}

async function takeInput() {
  let choice;

  do {
    console.log("=== Notes Manager ===");
    console.log("1. Create Note");
    console.log("2. Read Note");
    console.log("3. Update Note");
    console.log("4. Delete Note");
    console.log("5. Exit");

    choice = await rl.question("Choose Option: ");

    switch (choice) {
      case "1":
        await createNotes();
        break;

      case "2":
        await readNotes();
        break;

      case "3":
        await appendFile();
        break;

      case "4":
        await deleteNote();
        break;

      case "5":
        rl.close();
        break;

      default:
        break;
    }
  } while (choice !== "5");
}

takeInput();
