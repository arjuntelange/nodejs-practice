import net from "node:net";

const client = net.createConnection({ port: 4000 }, () => {
  console.log("Successfully connected to the TCP server.");

  client.write("Hello Server this is Arjun.");
});

client.on("data", (data) => {
  console.log(`Recieved from Server: ${data.toString()}`);
});

client.on("end", () => {
  console.log("Disconnected from the server.");
});
