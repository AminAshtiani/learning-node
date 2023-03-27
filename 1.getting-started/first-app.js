// fs is package to work with files in node.js
const fs = require("fs");

// create and open a file to write your content
// first argument is path of file, second is the content
fs.writeFileSync("./hello.txt", "Hello from Node.js");
