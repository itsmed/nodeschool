'use strict';

(function() {
  const fs = require('fs');

  let filePath: string = process.argv[2];
  let lines: number;
  lines = fs.readFileSync(filePath).toString().split('\n').length - 1;

  console.log(lines);

}());
