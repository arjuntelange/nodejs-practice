import { createReadStream, createWriteStream } from "node:fs";

const readStream = createReadStream("./text-processor/input.txt", {
  encoding: "utf-8",
});
const writeStream = createWriteStream("copy.txt", { encoding: "utf-8" });

readStream.pipe(writeStream);
