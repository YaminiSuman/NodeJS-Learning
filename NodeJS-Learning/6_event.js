// event module is part of core module to create custom events
// emit function fire event
// on bind it to the handler function

const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user} : ${message}`);
});

// emitter.emit("customEvent", "Hi", "Yami");
// emitter.emit("customEvent", "Bye", "Computer");

// take input through terminal

process.stdin.on("data", data => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "GoodBye ", "Process");
    process.exit();
  }
  emitter.emit("customEvent", input, "terminal");
});
