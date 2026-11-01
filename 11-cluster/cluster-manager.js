
import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;

  console.log(`Primary Process: ${process.pid}`);
  console.log(`Total CPU Cores: ${cpuCount}`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} is online!`);
  });

  cluster.on("listening", (worker, address) => {
    console.log(
      `Worker ${worker.process.pid} listening on port ${address.port}`
    );
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited. Code: ${code}`);

    if (!worker.exitedAfterDisconnect) {
      console.log("Restarting worker...");
      cluster.fork();
    }
  });

} else {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end(`Hello from worker: ${process.pid}`);
    }

    else if (req.url === "/crash") {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Worker ${process.pid} is crashing!`);

      process.exit(1);
    }

    else {
      res.writeHead(404);
      res.end("Page Not Found");
    }
  });

  server.listen(3000);
}
