var split = require('split');
var through = require('through');
var numberOfLines = 0;

var tr = through(function (buff) {
	numberOfLines++;
	this.queue(numberOfLines % 2 === 0 ? 
		buff.toString().toUpperCase() + '\n' : 
		buff.toString().toLowerCase() + '\n');
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
