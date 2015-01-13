var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function doneReading(err, contents){
	var lineCount = contents.split('\n').length - 1
	console.log(lineCount)
})
