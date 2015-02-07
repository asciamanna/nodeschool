'use strict;'

var _ = require('lodash');

var exercise = function(inputTodos) {

	var isUrgent = function(date) {
		var twoDays = 24*60*60*1000*2;
		return (new Date(date) - new Date()) < twoDays;
	}

	_.forEach(inputTodos, function(todos, name) {
		inputTodos[name] = _.sortBy(todos, 'date');
	});
 	var todoTemplate = '<ul>\n' +
        '<% _.forEach(sortedTodos, function(todos, name){ %>' +
            '<li><%= name %>\n' +
            '<ul>' +
            '<% _.forEach(todos, function(todo_item){ %>' +
                '<li>' +
                '<% if(isUrgent(todo_item.date)) { %><b>URGENT</b> <% } %>' +
                '<%= todo_item.todo %>' +
                '</li>\n' +
            '<% }); %>' +
            '</ul>\n' +
            '</li>\n' +
        '<% }); %>' +
        '</ul>';
	return 	_.template(todoTemplate, { 'imports': { 'isUrgent': isUrgent }})({ sortedTodos: inputTodos});
}

module.exports = exercise;
