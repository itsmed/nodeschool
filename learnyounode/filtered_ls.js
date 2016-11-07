'use strict';
(function () {
    var fs = require('fs');
    var directoryPath = process.argv[2];
    var extension = '.' + process.argv[3];
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            console.warn('error: ', err);
        }
        files.filter(function (file) { return file.includes(extension); }).forEach(function (file) { return console.log(file); });
    });
}());
