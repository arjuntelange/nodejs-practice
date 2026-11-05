import cluster from "node:cluster";
import os from "node:os";

if (cluster.isPrimary) {
  console.log(`Primary Process: ${process.pid}`);

  for (let i = 0; i < 2; i++) {
    const worker = cluster.fork();

    worker.on("message", (message) => {
      console.log(`Worker ${message.workerId}: ${message.status}`);
    });

    worker.send({
      processId: process.pid,
      message: "I am Primary Process!",
    });
  }
} else {
  process.send({
    workerId: process.pid,
    status: "Worker is ready!",
  });

  process.on("message", (msg) => {
    console.log(`Process ${msg.processId}: ${msg.message}`);
  });
}
