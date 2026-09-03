import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (no1) => {
  let num1 = no1;
  rl.question("Enter second number: ", (no2) => {
    let num2 = no2;
    console.log(`Addition of ${num1} + ${num2} =`, Number(no1) + Number(no2));
    rl.close();
  });
});
