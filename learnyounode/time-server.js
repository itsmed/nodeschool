'use strict';
(function () {
    var net = require('net');
    var format = require('strftime');
    var port = process.argv[2];
    // "YYYY-MM-DD hh:mm"
    var server = net.createServer(function (socket) {
        var date = format('%Y') + '-' + format('%m') + '-' + format('%d') + ' ' + format('%H') + ':' + format('%M') + '\n';
        socket.end(date);
    });
    server.listen(port, function () { return console.log("Listening on " + port); });
}());
