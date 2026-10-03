import net from "node:net";

const server = net.createServer((client) => {
  console.log("Client Connected!");

  client.on("data", (data) => {
    console.log(`Recieved from Client: ${data.toString()}`);

    client.write(`Server Echo: ${data}`);
  });

  client.on("end", () => {
    console.log("Client Disconnected!");
  });
});

server.listen(4000, () => {
  console.log(`TCP server is running on 4000`);
});
