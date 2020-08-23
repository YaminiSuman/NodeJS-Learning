const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "what is your name?",
  "Favorite hobby",
  "Preferred programming language"
];

const collectAnswer = (questions, done) => {
  const answers = [];
  let [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };
  rl.question(firstQuestion, questionAnswered);
};
collectAnswer(questions, answers => {
  console.log(`Thank you for your answer !!`);
  console.log(answers);
  process.exit();
});
