import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
} from "node:crypto";

const message = "This message must remain confidential.";

const key = randomBytes(32);

const iv = randomBytes(12);

const cipher = createCipheriv("aes-256-gcm", key, iv);

const encrypted = Buffer.concat([
  cipher.update(message, "utf-8"),
  cipher.final(),
]);

const authTag = cipher.getAuthTag();

const decipher = createDecipheriv("aes-256-gcm", key, iv);

decipher.setAuthTag(authTag);

const decrypted = Buffer.concat([
  decipher.update(encrypted),
  decipher.final(),
]).toString("utf-8");

console.log("Original Message:  ", message);
console.log("Ciphertext (Hex):  ", encrypted.toString("hex"));
console.log("Authentication Tag:", authTag.toString("hex"));
console.log("Decrypted Message: ", decrypted);
