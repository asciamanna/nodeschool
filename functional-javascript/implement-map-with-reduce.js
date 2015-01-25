module.exports = function arrayMay(arr, fn) {
	return arr.reduce(function (acc, curr, index) {
		return acc.concat(fn(curr));
	}, []);
}
