(function() {
  'use strict';
  const concat = require('concat-stream');
  // const { stdin, stdout } = process;

  process.stdin.pipe(concat(function(data) {
    process.stdout.write(data.toString().split('').reverse().join(''));
  }));

}());