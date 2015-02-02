var _ = require('lodash');

var analyze = function(freelancers) {
	var result = {};
	var total_income = _.reduce(freelancers, function(acc, freelancer) {
		return acc + freelancer.income;
	}, 0);

	result.average = total_income / _.size(freelancers);

	var underperform = _.filter(freelancers, function(f) { return f.income <= result.average; });
	var overperform = _.filter(freelancers, function(f) { return f.income > result.average; });

	result.underperform = _.sortBy(underperform, 'income');
	result.overperform = _.sortBy(overperform, 'income');

	return result;
}
module.exports = analyze;
