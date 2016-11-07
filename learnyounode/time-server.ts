'use strict';

(function() {
  const net = require('net');
  const format = require('strftime');

  const port = process.argv[2];
// "YYYY-MM-DD hh:mm"
  const server = net.createServer((socket) => {
    let date = format('%Y') + '-' + format('%m') + '-' + format('%d') + ' ' + format('%H') + ':' + format('%M') + '\n';
    socket.end(date);
  });

  server.listen(port, () => console.log(`Listening on ${port}`));
}());