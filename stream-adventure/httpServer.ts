(function() {
  'use strict';
  const through = require('through2');
  const http = require('http');

  const stream = through(write, end);

  function end(done) {
    return done();
  }


  function write(buff, _, next) {
    this.push(buff.toString().toUpperCase());
    next();
  }

  const port = process.argv[2];

  const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
      res.end();
    }

    req.pipe(stream).pipe(res);

  });

  server.listen(port, () => console.log(`Listening on port ${port}`));

}());