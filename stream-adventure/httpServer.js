(function () {
    'use strict';
    var through = require('through2');
    var http = require('http');
    var stream = through(write, end);
    function end(done) {
        return done();
    }
    function write(buff, _, next) {
        this.push(buff.toString().toUpperCase());
        next();
    }
    var port = process.argv[2];
    var server = http.createServer(function (req, res) {
        if (req.method !== 'POST') {
            res.end();
        }
        req.pipe(stream).pipe(res);
    });
    server.listen(port, function () { return console.log("Listening on port " + port); });
}());
