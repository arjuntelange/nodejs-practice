import { createReadStream, createWriteStream } from "node:fs";
import { Transform } from "node:stream";

const readStream = createReadStream("input.txt", { encoding: "utf-8" });
const writeStream = createWriteStream("output.txt");
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();

    callback(null, result);
  },
});

readStream.on("data", (chunk) => {
  transformStream.write(chunk);
});

transformStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("end", () => {
  transformStream.end();
});

transformStream.on("end", () => {
  writeStream.end();
});
