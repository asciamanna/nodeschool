var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var dateInUrl = new Date(parsedUrl.query.iso);
  var responseData;

	if (parsedUrl.pathname === '/api/parsetime') {
		responseData = createResponseDate(dateInUrl);
	}

	if (parsedUrl.pathname === '/api/unixtime') {
		responseData = createUnixTime(dateInUrl);	
	}

	if (responseData) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(responseData));
	}
	else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end();
	}
});
server.listen(process.argv[2]);

function createResponseDate(date) {
	return { 
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

function createUnixTime(date) {
	return {
		unixtime: date.getTime() 
	};
}
