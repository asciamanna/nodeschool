var filter = require('./filteredlsmodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(err, files) {
if (err) 
	console.error("THERE WAS AN ERROR.");

	files.forEach(function (file) {
		console.log(file);
	});
});
