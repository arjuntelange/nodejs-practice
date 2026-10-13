import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("notification", (username, message) => {
  console.log(`${username}: ${message}`);
});

emitter.emit("notification", "Arjun", "Your assignment is due tomorrow!");
