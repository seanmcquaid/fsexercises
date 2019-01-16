const fs = require("fs");

const fileText = fs.readFileSync(process.argv[2], "utf8");
if (err){
    console.log("doesnt work")
}

console.log(fileText.toUpperCase());