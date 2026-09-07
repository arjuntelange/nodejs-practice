import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function userLogin() {
  const username = await rl.question("Username: ");
  const password = await rl.question("Password: ");

  if (username === "arjun@21" && password === "Arjun3050") {
    console.log(`Welcome ${username}!\nLogin Successful🎉`);
    rl.close();
  } else {
    console.log("Invalid Credentials⚠️\n");
    userLogin();
  }
}

userLogin();
