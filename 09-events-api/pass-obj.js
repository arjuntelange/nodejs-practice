import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("orderPlaced", (obj) => {
  console.log(`Order Id: ${obj.orderId}`);
  console.log(`Customer Name: ${obj.customer}`);
  console.log(`Total: ${obj.total}`);
});

emitter.emit("orderPlaced", {
  orderId: 101,
  customer: "Arjun",
  total: 2999,
});