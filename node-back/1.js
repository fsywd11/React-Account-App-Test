console.log("Hello World");
const fs=require('fs');
fs.readFile("./2.txt", "utf8", function(err, data) {
    if (err) throw err;

    console.log(data);}
);

const path = require('path');
const filePath = path.join(__dirname, './2.txt');
console.log(filePath);
fs.readFile(filePath, "utf8", function(err, data) {
    if (err) throw err;

    console.log(data);
})