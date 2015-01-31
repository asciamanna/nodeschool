'use strict;'

var _ = require('lodash');

var where = function(users) {
	return _.where(users, { 'active': true}); 
};

module.exports = where;
