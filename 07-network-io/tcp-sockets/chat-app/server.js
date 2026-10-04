import { createInterface } from "node:readline/promises";
import net from "node:net";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

const server = net.createServer((client) => {
  console.log("Client Connected!");

  client.on("data", async (data) => {
    const message = data.toString();
    console.log(`Client: ${message}`);

    const reply = await rl.question("Enter Reply: ");

    client.write(reply);
  });

  client.on("end", () => {
    console.log("Client Disconnected!");
  });

  client.on("error", (error) => {
    console.log(error.message);
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000!");
});
