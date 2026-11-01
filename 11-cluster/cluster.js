import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;

  console.log(`Primary Process: ${process.pid}`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
    }
    res.end(`Handled by worker: ${process.pid}`);
  });

  server.listen(3000);

  console.log(`Worker started: ${process.pid}`);
}