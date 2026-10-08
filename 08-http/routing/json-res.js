import http from "node:http";

const server = http.createServer((req, res) => {
  const responseData = {
    name: "Arjun",
    college: "ADYPU",
    branch: "ECE",
  };

  res.writeHead(200, { "content-type": "application/json" });

  res.end(JSON.stringify(responseData));
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
