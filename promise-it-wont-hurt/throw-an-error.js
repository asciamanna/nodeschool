var q = require('q');

function parsePromised(json) {
	var defer = q.defer();
	var result;
	
	try {
		result = JSON.parse(json);
	}
	catch(e) {
		defer.reject(e);
	}
	defer.resolve(result);
	return defer.promise;
};

parsePromised(process.argv[2]).then(null, console.log);
