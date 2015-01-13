var http = require('http');
var bl = require('bl');
var responseCount = 0;
var responses = [];

for(var i = 0; i < 3; i++) {
	get(i);
}

function get(index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) 
				return console.error(err);
			responses[index] = data.toString();
			responseCount++;

			if(responseCount === 3)
				logResults();
		}));
	});
}

function logResults() {
	while(responses.length !== 0) {
		console.log(responses.shift());
	}
}
