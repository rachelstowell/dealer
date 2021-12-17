const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		fs.readFile('./index.html', null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('index.html not found');
		} else {
			response.write(data);
		}
		response.end();
		});
	});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;