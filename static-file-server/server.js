import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost:4000");

  let filePath = "";
  let contentType = "text/plain";

  switch (url.pathname) {
    case "/":
      filePath = path.join(__dirname, "public", "index.html");
      contentType = "text/html";
      break;

    case "/style.css":
      filePath = path.join(__dirname, "public", "style.css");
      contentType = "text/css";
      break;

    case "/script.js":
      filePath = path.join(__dirname, "public", "script.js");
      contentType = "application/javascript";
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Error 404: Page Not Found!");
      return;
  }

    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
});

server.listen(4000, () => {
  console.log("Server is running and up on http://localhost:4000");
});
