function countWords(inputWords) {
	return inputWords.reduce(function(words, curr) {
		 words[curr] = ++words[curr] || 1;
		 return words;
	}, {});
}

module.exports = countWords;
