'use strict;'

var _ = require('lodash');

var sort = function(items) {
	return _.sortBy(items, function(item) { 
		return -item.quantity; 
	});
};

module.exports = sort;
