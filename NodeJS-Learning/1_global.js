// Global contains the functionality available to us without importing any module
// Like Name of the current file
// Full path of the directory
// CommonJS module pattern - to manipulate these files using functions like require and exports

console.log(__dirname);
console.log(__filename);

// use path module to extract filename

const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
