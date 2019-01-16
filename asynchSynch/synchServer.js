const fs = require("fs");

const fileText = fs.readFileSync(process.argv[2], "utf8");
console.log(fileText);
const writeFileText = fs.writeFileSync(process.argv[3], fileText);