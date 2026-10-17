import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.once("orderPlaced", () => {
  console.log("First-time order processing!");
});

emitter.on("orderPlaced", () => {
  console.log("Order event detected!");
});

emitter.emit("orderPlaced");
emitter.emit("orderPlaced");
emitter.emit("orderPlaced");