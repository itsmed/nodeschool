'use strict';

(function() {
  const fs = require('fs');
  const directoryPath: string = process.argv[2];
  const extension: string = '.' + process.argv[3];

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.warn('error: ', err);
    }
    files.filter(file => file.includes(extension)).forEach(file => console.log(file));
  });
}())
