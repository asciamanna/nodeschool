var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();

var loudStream = tr.select('.loud').createStream();
loudStream.pipe(through(function (buff) {
	this.queue(buff.toString().toUpperCase());
})).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);
