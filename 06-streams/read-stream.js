import { createReadStream } from "node:fs";

const readableStream = createReadStream("long-doc.txt", { encoding: "utf-8" });

readableStream.on("data", (chunk) => {
  console.log(`Chunk Received: \n${chunk}`);
});
readableStream.on("end", () => console.log("Reading Finished!"));
