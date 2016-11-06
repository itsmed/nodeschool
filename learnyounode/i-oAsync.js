'use strict';
(function () {
    var fs = require('fs');
    var allData;
    var filePath = process.argv[2];
    fs.readFile(filePath, 'utf8', function (error, data) {
        if (error) {
            console.warn('error', error);
        }
        allData += data;
        console.log(allData.split('\n').length - 1);
    });
}());
