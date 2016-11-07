'use strict';
(function () {
    var http = require('http');
    var url = process.argv[2];
    http.get(url, function (response) {
        response.on('error', console.error);
        response.on('data', function (data) {
            console.log(data.toString());
        });
    });
}());
