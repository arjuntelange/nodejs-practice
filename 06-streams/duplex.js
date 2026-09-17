import { Duplex } from "node:stream";

const simpleDuplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log("IN (Received):", chunk.toString());
    callback();
  },

  read() {
    this.push("OUT (Hello from the stream!)");
    this.push(null);
  },
});

simpleDuplex.on("data", (chunk) => {
  console.log(chunk.toString());
});

simpleDuplex.write("Hey there!");
simpleDuplex.end();
