'use strict';
(function () {
    var http = require('http');
    var through = require('through2-map');
    var port = process.argv[2];
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(function (chunk) { return chunk.toString().toUpperCase(); }))
                .pipe(res);
        }
    });
    server.listen(port, function () { return console.log("Listening on port " + parseInt(process.argv[2])); });
}());
