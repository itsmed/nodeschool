(function() {
  'use strict';

  const through = require('through2');
  const stream = through(write, end);

  function write(buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
  }

  function end(done) {
    done();
  }

  process.stdin.pipe(stream).pipe(process.stdout);
}());