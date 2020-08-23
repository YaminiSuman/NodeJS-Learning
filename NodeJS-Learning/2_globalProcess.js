// Process object dealt with the process related information -like pid, version , get info from env variables etc

console.log(process.pid);
console.log(process.versions.node);

// process.argv -- arg variable sent to process when we run it
// it's an array that we pass when we run the node program
// we can destructure it as well and get the arg that we want
// run it as -- node 2_globalProcess Yamini Suman

console.log(process.argv);

const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} - ${lastName}`);

// Make it better by using flags
// run it - node 2_globalProcess --user "Yamini Suman" --greeting "Hello"

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;

  return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
