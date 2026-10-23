import { createHash } from "node:crypto";

const message = "I am learning Node Crypto";

const hash = createHash("sha256");

hash.update(message);

const hashValue = hash.digest("hex");

console.log("Original Message: ", message);
console.log("Hashed Message: ", hashValue);

//Output-1: 4767307d0e2409752e95b9a6a9a71a2967a09d3454473a1d58b9a33c43b81815
//Output-2: 4767307d0e2409752e95b9a6a9a71a2967a09d3454473a1d58b9a33c43b81815
//Output-3(After removing '.js' from message): 7b503a323669b4da1cc9634d1a1d51241b8ec15a2e137bd5ca13d41f00a56432