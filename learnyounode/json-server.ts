'use strict';

(function() {
  const http = require('http');
  const url = require('url');
  const port: string = process.argv[2];

  const server: any = http.createServer((req, res) => {
    if (req.method !== 'GET') {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.send('Blargh!');
      res.end();
    }
    let reqUrl = url.parse(req.url, true);
    let date = reqUrl.query.iso;

    if (reqUrl.pathname === '/api/parsetime') {
      let time = new Date(Date.parse(date));

      res.writeHead(200, {'content-type': 'application/json'});
      res.write(JSON.stringify({"hour": time.getHours(), "minute": time.getMinutes(), "second": time.getSeconds()}));
    }
    if (reqUrl.pathname === '/api/unixtime') {
      res.writeHead(200, {'content-type': 'application/json'});
      res.write(JSON.stringify({"unixtime": Date.parse(date)}));
    }
    res.end();
  });

  server.listen(port, () => console.log(`Listening on port ${port}`));
}());