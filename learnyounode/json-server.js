'use strict';
(function () {
    var http = require('http');
    var url = require('url');
    var port = process.argv[2];
    var server = http.createServer(function (req, res) {
        if (req.method !== 'GET') {
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.send('Blargh!');
            res.end();
        }
        var reqUrl = url.parse(req.url, true);
        var date = reqUrl.query.iso;
        if (reqUrl.pathname === '/api/parsetime') {
            var time = new Date(Date.parse(date));
            res.writeHead(200, { 'content-type': 'application/json' });
            res.write(JSON.stringify({ "hour": time.getHours(), "minute": time.getMinutes(), "second": time.getSeconds() }));
        }
        if (reqUrl.pathname === '/api/unixtime') {
            res.writeHead(200, { 'content-type': 'application/json' });
            res.write(JSON.stringify({ "unixtime": Date.parse(date) }));
        }
        res.end();
    });
    server.listen(port, function () { return console.log("Listening on port " + port); });
}());
