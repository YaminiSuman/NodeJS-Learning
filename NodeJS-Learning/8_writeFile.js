// writeFileSync - to write it synchronously
// fs.mkdir to create directory
// fs.appendFile to append file
// fs.renameSync and fs.rename() to rename the files/folder
// fs.unlinkSync to remove the file - takes only one argument
// fs.rmdir to remove the directories
// before we remove dir -  we need to unlink all the files from dir

const fs = require("fs");

const md = `#New file
Hi 
Writing to nw

`;

fs.writeFile("./note.md", md.trim(), err => {
  if (err) throw err;
  console.log("File saved");
});
