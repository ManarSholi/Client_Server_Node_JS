const http = require('http');

let options = {
    host: 'localhost',
    port: 8081,
    path: '/index.html'
};

let callback = function (response) {
    let body = '';
    response.on('data', function (data) {
        body += data;
    });

    response.on('end', function () {
        console.log(body);
    });
}

let request = http.request(options, callback);
request.end();
