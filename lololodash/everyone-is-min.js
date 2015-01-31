'use strict;'

var _ = require('lodash');

var sorttowns = function(towns) {
	var hot = [], warm = [];
	_.forEach(towns, function(temps, name) {
		if (_.every(temps, function(t) { return t > 19;})) {
			hot.push(name);
		}
		else if (_.some(temps, function(t) { return t > 19;})) {
			warm.push(name);
		}
	});
	return { hot: hot, warm: warm };
}
module.exports = sorttowns;
