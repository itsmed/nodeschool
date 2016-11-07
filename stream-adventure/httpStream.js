'use strict';
(function () {
    var trumpet = require('trumpet');
    var through = require('through2');
    var tr = trumpet();
    var stream = tr.select('.loud').createStream();
    process.stdin.pipe(tr).pipe(process.stdout);
    stream.pipe(through(function (buff, _, next) {
        this.push(buff.toString().toUpperCase());
        next();
    })).pipe(stream);
}());
