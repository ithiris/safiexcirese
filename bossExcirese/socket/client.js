
var net = require('net');
var client = new net.Socket();
client.connect(3000, '127.0.0.1', function() {
	console.log('Connected');
	client.write('dsdd, server! Love, Client.');
});
