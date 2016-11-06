'use strict';

(function() {
  const fs = require('fs');
  let allData: string;
  let filePath: string = process.argv[2];

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.warn('error', error);
    }
    allData += data;
    console.log(allData.split('\n').length - 1);
  });
}());