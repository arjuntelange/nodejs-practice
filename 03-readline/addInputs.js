import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (no1) => {
  rl.question("Enter second number: ", (no2) => {
    const num1 = Number(no1);
    const num2 = Number(no2);

    console.log(`Addition of ${num1} + ${num2} = ${num1 + num2}`);
    rl.close();
  });
});
