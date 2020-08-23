// node comes with child process to interact with other apps in it's env
// exec to run external commond synchronously
// spawn for asynchronous

const cp = require("child_process");

cp.exec("open http://www.linkedin.com/learning");
cp.exec("open -a Terminal .");

const quesApp = cp.spawn("node", ["3_questions.js"]);
