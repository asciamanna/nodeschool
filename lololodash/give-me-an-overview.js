'use strict;'

var _ = require('lodash');
var calculateTotalOrders = function(orders) {
	var results = [];
	var grouped_orders = _.groupBy(orders, 'article');
	_.forEach(grouped_orders, function(orders_by_article, article) {
		var total_orders = _.reduce(orders_by_article, function(acc, order) {
			return acc + order.quantity;
		}, 0);
		results.push( { article: parseInt(article), total_orders: total_orders }); 
	});
	return _.sortBy(results, function(o) { return -o.total_orders; });
}

module.exports = calculateTotalOrders; 
