'use strict';
(function () {
    var fs = require('fs');
    var filePath = process.argv[2];
    var lines;
    lines = fs.readFileSync(filePath).toString().split('\n').length - 1;
    console.log(lines);
}());
