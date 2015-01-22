var duplexer = require('duplexer');
var through = require('through');

	var counts = {};
module.exports = function(counter) {
	var input = through(write, end); 
	return duplexer(input, counter);

	function write(obj) {
		counts[obj.country]	 = (counts[obj.country] || 0 ) + 1;
	}	

	function end() {
		counter.setCounts(counts);
	}	
};

