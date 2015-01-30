var express = require('express');
var fs = require('fs');

var app = express();
app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		var object = JSON.parse(data);
		res.json(object);
	});
});
app.listen(process.argv[2]);
