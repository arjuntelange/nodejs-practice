import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createStudentProfile() {
  const name = await rl.question("Name: ");
  const age = await rl.question("Age: ");
  const city = await rl.question("City: ");

  console.log("\n----- Student Profile -----\n");
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);

  rl.close();
}

createStudentProfile();
