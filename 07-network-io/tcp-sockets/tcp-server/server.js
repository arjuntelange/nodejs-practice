import net from "node:net";

const server = net.createServer((client) => {
  console.log("Client Connected!");

  client.on("data", (data) => {
    const message = data.toString().trim();
    console.log(`Received from client: ${message}`);
    client.write("Welcome Arjun! 🎉");
  });

  client.on("end", () => {
    console.log("Client Disconnected!");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`TCP server is running on port ${PORT}`);
});
