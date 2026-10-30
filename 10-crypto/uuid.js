import crypto from "node:crypto";

const obj = {
  id: crypto.randomUUID(),
  username: "Arjun",
  role: "SDE-1 @Amazon",
};

console.log(obj);
