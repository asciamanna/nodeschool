function Spy(target, method) {
	var result = {count : 0};
	var previous = target[method];

	target[method] = function() {
		result.count++;
		return previous.apply(this, arguments);
	}
  return result;
}
module.exports = Spy;
