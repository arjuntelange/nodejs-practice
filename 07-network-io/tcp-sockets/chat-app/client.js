import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import net from "node:net";

const rl = createInterface({ input, output });

const client = net.createConnection({ port: 4000 }, async () => {
  console.log("Connected to the Server!");

  const message = await rl.question("Enter message: ");
  client.write(message);
});

client.on("data", async (data) => {
  const message = data.toString();
  console.log(`Server: ${message}`);

  const reply = await rl.question("Enter reply: ");
  client.write(reply);
});

client.on("end", () => {
  console.log("Disconnected from the Server!");
});

client.on("error", (error) => {
  console.log(error.message);
});
