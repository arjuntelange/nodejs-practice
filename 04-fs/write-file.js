import fs from "fs";

fs.writeFile(
  "notes.txt",
  "In Node.js, fs.writeFile() is a built-in method used to asynchronously write data to a file.",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File created successfully!");
  },
);
