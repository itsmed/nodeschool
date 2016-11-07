'use strict';
(function () {
    var http = require('http');
    var url = process.argv[2];
    var allData = '';
    http.get(url, function (response) {
        response.on('error', console.error);
        response.on('data', function (data) { return allData += data.toString(); });
        response.on('end', function () {
            console.log(allData.length);
            console.log(allData);
        });
    });
}());
