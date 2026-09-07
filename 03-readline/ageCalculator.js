import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your age? ", (age) => {
  console.log(`You will be ${Number(age) + 1} next year.`);
  rl.close();
});
