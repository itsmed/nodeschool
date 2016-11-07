'use strict';

(function() {
  const http = require('http');
  const url: string = process.argv[2];

  http.get(url, (response) => {
    response.on('error', console.error);
    response.on('data', data => {
      console.log(data.toString());
    });
  });
}());