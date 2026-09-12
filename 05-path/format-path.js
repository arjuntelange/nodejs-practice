import { format } from "node:path";

const myPathObj = {
  dir: "/documents/notes",
  base: "node.txt",
};

const fullPath = format(myPathObj);

console.log(fullPath);
