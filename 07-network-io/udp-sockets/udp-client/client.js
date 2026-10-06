import dgram from "node:dgram";

const client = dgram.createSocket("udp4");

const message = Buffer.from("Hello from the UDP Client!");

client.send(message, 4000, "localhost", () => {
  console.log("Message sent successfully!");
  client.close();
});
