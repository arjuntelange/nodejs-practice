import fs from "node:fs/promises";
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createProject() {
  const title = await rl.question("Enter title of project: ");

  try {
    await fs.mkdir(`projects/${title}`);
    console.log("Folder created successfully!🎉");
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function listProject() {
  try {
    const entries = await fs.readdir("projects");
    console.log("=== Projects ===");
    let count = 1;
    entries.forEach((entry) => {
      console.log(`${count}. ${entry}`);
      count++;
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteProject() {
  const title = await rl.question("Enter name of folder to delete: ");

  try {
    await fs.rm(`projects/${title}`, { recursive: true });
    console.log("File removed successfully!🎉");
  } catch (error) {
    console.log(error);
  }
}

async function checkExistence() {
  const title = await rl.question("Enter name of folder: ");

  try {
    await fs.access(`projects/${title}`);
    console.log("Folder Exists! ✅");
  } catch {
    console.log("Folder not found! ❌");
  }
}

async function manageProject() {
  let choice;

  do {
    console.log("=== Project Manager ===");
    console.log("1. Create Project");
    console.log("2. List Projects");
    console.log("3. Delete Project");
    console.log("4. Check Existence");
    console.log("5. Exit");

    choice = await rl.question("Choose Option:");

    switch (choice) {
      case "1":
        await createProject();
        break;

      case "2":
        await listProject();
        break;

      case "3":
        await deleteProject();
        break;

      case "4":
        await checkExistence();
        break;

      case "5":
        rl.close();
        break;

      default:
        console.log("Invalid Choice! Select number between 1-4.");
        break;
    }
  } while (choice !== "5");
}

manageProject();
