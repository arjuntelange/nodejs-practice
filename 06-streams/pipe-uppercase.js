import { createReadStream, createWriteStream } from "node:fs";
import { Transform } from "node:stream";

const readableStream = createReadStream("./text-processor/input.txt", {
  encoding: "utf-8",
});
const writableStream = createWriteStream("output.txt");
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();
    callback(null, result);
  },
});

readableStream.pipe(transformStream).pipe(writableStream);
