import cluster from "node:cluster";
import os from "node:os";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;

  console.log(`Primary Process: ${process.pid}`);

  for (let i = 0; i < 2; i++) {
    const worker = cluster.fork();

    worker.on("message", (message) => {
      console.log(`Worker ${message.workerId}: ${message.status}`);
    });
  }
} else {
  process.send({
    workerId: process.pid,
    status: "Worker is ready!",
  });
}
