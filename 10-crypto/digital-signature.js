import crypto from "node:crypto";

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

const message = "This is a secure message!";

function signData(data) {
  const signer = crypto.createSign("SHA256");
  signer.update(data);
  signer.end();
  return signer.sign(privateKey, "hex");
}

const signature = signData(message);

console.log("Signature: ", signature);
