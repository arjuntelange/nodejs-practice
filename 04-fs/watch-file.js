import { watch } from "node:fs";

function watchFile() {
  const watcher = watch("sample.txt", (eventType, filename) => {
    console.log(`Event: ${eventType}`);
    if (filename) {
      console.log(`File changed: ${filename}`);
    }

    watcher.close();
    console.log("Watcher closed automatically!");
  });
}

watchFile();
