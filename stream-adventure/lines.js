(function () {
    'use strict';
    var through = require('through2');
    var split = require('split');
    var numLines = 0;
    process.stdin
        .pipe(split())
        .pipe(through(function (line, _, next) {
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
