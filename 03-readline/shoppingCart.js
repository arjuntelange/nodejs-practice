import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askNumber(promptText) {
  while (true) {
    const input = await rl.question(promptText);
    const parsed = Number(input);

    if (!isNaN(parsed) && input.trim() !== null) {
      return parsed;
    }

    console.log("⚠️ Invalid input. Please enter a valid number.\n");
  }
}

async function runShoppingCart() {
  console.log("--- New Order ---\n");

  const item = await rl.question("Item name: ");
  const price = await askNumber("Price ($): ");
  const quantity = await askNumber("Quantity: ");

  const total = price * quantity;

  console.log("\n----- Final Receipt -----");
  console.log(`Item:     ${item}`);
  console.log(`Price:    $${price.toFixed(2)}`);
  console.log(`Quantity: ${quantity}`);
  console.log("-------------------------");
  console.log(`Total:    $${total.toFixed(2)}`);

  rl.close();
}

runShoppingCart();
