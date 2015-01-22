var combine = require('stream-combiner');
var through = require('through');
var zlib = require('zlib');
var split = require('split');

module.exports = function() {
	var currentItem;
	var groupBooks = through(write, end);
	return combine(split(), groupBooks, zlib.createGzip());

	function write(buff) {
		if (buff.length === 0) return;

  	 var line = JSON.parse(buff);
		if (line.type === 'genre') {
			if(currentItem) {
				this.queue(JSON.stringify(currentItem) + '\n');
			}
			currentItem = { name: line.name, books: []};
		}
		else if (line.type === 'book') {
			currentItem.books.push(line.name);
		}
	}

	function end() {
		if (currentItem) {
			this.queue(JSON.stringify(currentItem) + '\n');
		}
		this.queue(null);
	}
};
