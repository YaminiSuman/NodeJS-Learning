// other than even handlers we can use timers functions for asynchronous task
// process.stdout.clearLine(); -- clear line
// process.stdout.cursorTo(0); -- move the cursor to 0 index

const waitTime = 2000;
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
  currentTime += waitInterval;
  let percent = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${percent}%`);
};
console.log("setting a time out of 2 sec");

const timerFunction = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done !!");
};

const interval = setInterval(incrementTime, waitInterval);
setTimeout(timerFunction, waitTime);
