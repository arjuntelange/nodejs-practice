import fs from "fs";

fs.unlink("learning-notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File deleted successfully!");
});
