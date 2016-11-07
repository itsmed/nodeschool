'use strict';

(function() {
  const http = require('http');
  const through = require('through2-map');
  const port = process.argv[2];

  const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
      req.pipe(through((chunk) => chunk.toString().toUpperCase()))
        .pipe(res);
    }
  });

  server.listen(port, () => console.log(`Listening on port ${parseInt(process.argv[2])}`));
}());