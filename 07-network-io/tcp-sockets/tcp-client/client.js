import net from "node:net";

const PORT = 3000;

const client = net.createConnection({ port: PORT }, () => {
  console.log("Successfully connected to the TCP server.");
});

client.on("data", (data) => {
  console.log(`Server says: ${data.toString()}`);
});

client.write("Hello from Arjun!");
