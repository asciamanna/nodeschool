var concat = require('concat-stream');

process.stdin.pipe(concat(function (input) {
	var result = input.toString().split('').reverse().join('');
	process.stdout.write(result);
}));
