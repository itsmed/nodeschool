'use strict';

(function() {
  const combine = require('stream-combiner');
  const through = require('through2');
  const split = require('split');
  const zlib = require('zlib');

  module.exports = (data) => {
    const sorts = through(write, end);
    let current;

    function end(next) {
      if (current) {
        this.push(JSON.stringify(current) + '\n');
      }
      next();
    }

    function write(line, _, next) {
      if (line.length === 0) {
        return next();
      }

      let row = JSON.parse(line);

      if(row.type === 'genre') {
          if (current) {
            this.push(JSON.stringify(current) + '\n');
          }
          current = { name: row.name, books: [] };
      }
      else if (row.type ==='book') {
        current.books.push(row.name);
      }

      next();
    }

    return combine(split(), sorts, zlib.createGzip());
  }

}());
