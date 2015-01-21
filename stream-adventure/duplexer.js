var duplexer = require('duplexer');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
	var p = spawn(cmd, args);
	return duplexer(p.stdin, p.stdout);
};
