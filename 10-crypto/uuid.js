import crypto from "node:crypto";

const arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(crypto.randomUUID());
}

console.log(arr);
