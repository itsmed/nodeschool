'use strict';
(function () {
    var request = require('request');
    var stdin = process.stdin, stdout = process.stdout;
    stdin.pipe(request.post('http://localhost:8099')).pipe(stdout);
}());
