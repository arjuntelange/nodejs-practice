import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

function notifyUser() {
  console.log("Notification received!");
}

emitter.on("notification", notifyUser);

emitter.emit("notification");

emitter.off("notification", notifyUser);

emitter.emit("notification");
