import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.once("welcomeMsg", () => {
  console.log("Welcome to the Order Tracker!");
});

emitter.on("orderPlaced", (orderInfo) => {
  console.log(
    `Order #${orderInfo.orderId} confirmed by ${orderInfo.customer}.`,
  );
});

emitter.on("orderPlaced", (orderInfo) => {
  console.log(`Total: ${orderInfo.total}`);
});

emitter.on("orderShipped", (orderInfo) => {
  console.log(`Order #${orderInfo.orderId} has been shipped.`);
});

emitter.on("orderCancle", (orderInfo) => {
  console.log(
    `Order #${orderInfo.orderId} has been cancled by ${orderInfo.customer}`,
  );
});

emitter.emit("welcomeMsg");
emitter.emit("orderPlaced", {
  orderId: 501,
  customer: "Arjun",
  total: 2499,
});

setTimeout(() => {
  emitter.emit("orderShipped", {
    orderId: 501,
    customer: "Arjun",
    total: 2499,
  });
}, 1000);

setTimeout(() => {
  emitter.emit("orderCancle", {
    orderId: 501,
    customer: "Arjun",
    total: 2499,
  });
}, 2000);
