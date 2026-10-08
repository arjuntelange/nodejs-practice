import http from "node:http";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:4000");

  const name = url.searchParams.get("name");

  const response = {
    message: `Hello ${name || "Guest"}!`,
  };

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(response));
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});