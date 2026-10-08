import http from "node:http";

const myServer = http.createServer((req, res) => {
  console.log("Request Received!");
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);

  res.end("Welcome to Request Inspector");
});

myServer.listen(8000, () => {
  console.log("Server running on port 8000");
});
