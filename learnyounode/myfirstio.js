var fs = require('fs');
var fileString = fs.readFileSync(process.argv[2], 'utf8');
var length = fileString.split("\n").length - 1;
console.log(length);


