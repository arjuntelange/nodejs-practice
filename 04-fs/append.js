import fs from "fs";

fs.appendFile(
  "notes.txt",
  "\n\nappendFile()\nIn Node.js, the fs.appendFile() method adds data to the end of a file",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Data appended successfully!");
  },
);
