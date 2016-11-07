(function() {
  'use strict';
  const through = require('through2');
  const split = require('split');
  let numLines: number = 0;

  process.stdin
    .pipe(split())
    .pipe(through(function(line, _, next) {
      if (numLines % 2 === 0) {
        this.push(line.toString().toLowerCase() + '\n');
      }
      else {
        this.push(line.toString().toUpperCase() + '\n');
      }
      numLines++;
      next();
    }))
    .pipe(process.stdout);

}());
