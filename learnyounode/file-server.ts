'use strict';

(function() {
  const http = require('http');
  const fs = require('fs');

  const port: string = process.argv[2];
  const fileLocation: string = process.argv[3];

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});

    fs.createReadStream(fileLocation).pipe(res);
  });

  server.listen(port, () => console.log(`Server listening on ${port}`));
}());