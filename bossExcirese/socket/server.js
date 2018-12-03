const net = require('net');
var text = '';
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(data){
		console.log(data);
		text = data.toString('utf8');
		console.log(text);
		socket.write(text);
	});
});
server.listen(3000, '127.0.0.1');
