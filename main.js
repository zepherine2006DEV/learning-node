var http = require("http");

// define a function which is called every time a http request is received.

var requestListener = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}

// create an instance of a server, with the function defined above.

var httpServer = http.createServer(requestListener);

// get the server to listen on port 8081.

httpServer.listen(8081);

// output a message to say the server is running.

console.log('listening........');
