import fs from "fs";

fs.rename("notes.txt", "learning-notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File renamed successfully!");
});
