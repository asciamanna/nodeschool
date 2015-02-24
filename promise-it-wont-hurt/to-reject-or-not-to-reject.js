var q = require('q');
var defer = q.defer();

function printError(error) {
	console.log(error.message);
}

defer.promise.then(console.log, console.log);
defer.resolve("I FIRED");
defer.reject("I DID NOT FIRE");
