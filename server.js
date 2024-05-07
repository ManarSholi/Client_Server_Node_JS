const http = require('http');
const filesystem = require('fs');
const url = require('url');

// Create a server
http.createServer(function (request, response) {
    // Parse the request containing filename
    let pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made.
    console.log(`Request for ${pathname} received.`);

    // Read the requested file content from file system
    filesystem.readFile(pathname.substring(1), function (error, data) {
        if (error) {
            console.error(error);

            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }

        response.end();
    });
}).listen(8081);


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
