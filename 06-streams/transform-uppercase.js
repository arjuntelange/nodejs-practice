import { Transform } from "node:stream";

const upperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();

    callback(null, result);
  },
});

upperCaseStream.write("hello, ");
upperCaseStream.write("Radhika!");

upperCaseStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

upperCaseStream.end();
