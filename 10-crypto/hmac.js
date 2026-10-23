import { createHmac } from "node:crypto";

const message = "Transfer ₹500 to Arjun";
const secret = "my-secret-key";

const hash = createHmac("sha256", secret);

hash.update(message);

const hashValue = hash.digest("hex");

console.log("Hashed Value: ", hashValue);
