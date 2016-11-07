'use strict';

(function() {
  const http = require('http');
  const url: string = process.argv[2];
  let allData: string = '';

  http.get(url, response => {
    response.on('error', console.error);
    response.on('data', data => allData += data.toString());
    response.on('end', () => {
      console.log(allData.length);
      console.log(allData);
    })
  });

}());