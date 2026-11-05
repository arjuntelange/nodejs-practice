import cluster from "node:cluster";

if (cluster.isPrimary) {

  const worker1 = cluster.fork();
  const worker2 = cluster.fork();

  worker1.on("message", (result) => {
    console.log(`Sum of numbers from 1 to 100 is ${result}`);
  });

  worker2.on("message", (result) => {
    console.log(`Sum of numbers from 101 to 200 is ${result}`);
  });

  worker1.send({ start: 1, end: 100 });
  worker2.send({ start: 101, end: 200 });

} else {

  process.on("message", (task) => {
    let sum = 0;

    for (let i = task.start; i <= task.end; i++) {
      sum = sum + i;
    }

    process.send(sum);
  });
  
}
