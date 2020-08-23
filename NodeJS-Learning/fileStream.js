const fs = require("fs");

const readStream = fs.createReadStream("./README.md", "UTF-8");
let fileTxt = "";

readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

readStream.on("end", () => {
  console.log("tfinished reading ");
});
// readStream.once() -- fires on first little bit of data
// readStream.on("end",) -- fires on finish reading file

// -- WRITE STREAM
const writeStream = fs.createWriteStream("./writeFile.md", "UTF-8");
writeStream.write("Hey");
