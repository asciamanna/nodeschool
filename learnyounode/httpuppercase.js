var map = require('through2-map');
var http = require('http');

var httpServer = http.createServer(function(req, res) {
	if (req.method != 'POST') 
		return res.end('Not a post request.\n');
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res);
});
httpServer.listen(process.argv[2]);
