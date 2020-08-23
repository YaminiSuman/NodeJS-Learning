// Another feature of process object is standard input and standard output

process.stdout.write("Hello ");
process.stdout.write("World \n\n");

// create questions

const questions = [
  "what is your name?",
  "Favorite hobby",
  "Preferred programming language"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

// We gonna make it asynchronous by listening to the event - of user typying by keyboard
// so the program will not terminate but will be open
// will use stdin feature of process object

const answers = [];
process.stdin.on("data", data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, hobby, lang] = answers;
  console.log(`
  Thank you for your answers !!

  Go for ${hobby} ${name}. You can write ${lang} code later !!!`);
});
