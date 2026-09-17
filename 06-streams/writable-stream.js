import { createWriteStream } from "node:fs";

const writeableStream = createWriteStream("output.txt", { encoding: "utf-8" });

writeableStream.write("Hello Arjun!\n");
writeableStream.write("Welcome to Node.js Streams.\n");

writeableStream.end("Finalizing and closing the stream.");

writeableStream.on("finish", () => {
  console.log("All data has been successfully flushed to the file.");
});

writeableStream.on("error", (err) => {
  console.error("An error occurred while writing:", err);
});
