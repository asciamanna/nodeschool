'use strict;'

var _ = require('lodash');

var templating = function(user) {
	return _.template('Hello <%= name %> (logins: <%= logins %>)')
		({ name:  user.name, logins:  _.size(user.login) });
}
module.exports = templating;
