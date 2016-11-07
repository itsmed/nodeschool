'use strict';
(function () {
    var http = require('http');
    var fs = require('fs');
    var port = process.argv[2];
    var fileLocation = process.argv[3];
    var server = http.createServer(function (req, res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        fs.createReadStream(fileLocation).pipe(res);
    });
    server.listen(port, function () { return console.log("Server listening on " + port); });
}());
