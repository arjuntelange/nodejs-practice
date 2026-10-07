import dgram from "node:dgram";

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(`Message Received: ${msg}`);
  console.log(`From: ${rinfo.address}:${rinfo.port}`);

  server.send(`UDP echo: ${msg}`, rinfo.port, rinfo.address);
});

server.bind(4000, () => {
  console.log("UDP Server listening on port 4000");
});
