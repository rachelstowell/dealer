const http = require('http');
const fs = require('fs');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const hostname = '127.0.0.1';

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