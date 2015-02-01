'use strict;'

var _ = require('lodash');

var getCommentCount = function(comments) {
	var grouped_comments = _.groupBy(comments, 'username');
	var comment_counts = [];
	_.forEach(grouped_comments, function(comment, name) {
		comment_counts.push({username: name, comment_count: _.size(comment) });
	});
	return _.sortBy(comment_counts, function(c) { return -c;});
}
module.exports = getCommentCount;
