// reuire(fs)
// read content of directory -readdir

const fs = require("fs");

// read sync using readdirsync
const files = fs.readdirSync("./");
console.log(files);

//to read it async use readdir
fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log("complete");
  console.log(files);
});

// read text of files-sync

const text = fs.readFileSync("./README.md", "UTF-8");
console.log(text);

// asynchronously
// can use text/binary file  as well here
fs.readFile("./README.md", "UTF-8", (err, text) => {
  if (err) throw err;
  console.log("file contents read");
  console.log(text);
});
