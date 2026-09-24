import { log } from "console";
import http from "http";

const myServer = http.createServer((req, res) => {
  res.end("Hello from Arjun's Node Server");
});

myServer.listen(8000, () => {
  console.log("Server running on port 3000");
});
