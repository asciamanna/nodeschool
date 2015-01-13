var net = require('net');

var server = net.createServer(function (socket) {
	socket.end(getFormattedDate() + "\n");
});
server.listen(process.argv[2]);

function getFormattedDate() {
	var now = new Date();
	return now.getFullYear() +
		"-" +
		zeroPad(Number(now.getMonth() + 1)) +
		"-" +
		zeroPad(now.getDate()) +
		" " +
		zeroPad(now.getHours()) +
		":" +
		zeroPad(now.getMinutes());
}

function zeroPad(number) {
	var padded = "0" + number;
	return padded.slice(-2);
}
