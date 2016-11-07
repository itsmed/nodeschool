'use strict';
(function () {
    var http = require('http');
    var urlOne = process.argv[2];
    var urlTwo = process.argv[3];
    var urlThree = process.argv[4];
    var dataOne = '';
    var dataTwo = '';
    var dataThree = '';
    var flags = {
        first: false,
        second: false,
        third: false
    };
    var logAll = function () {
        console.log(dataOne);
        console.log(dataTwo);
        console.log(dataThree);
    };
    var checkComplete = function () {
        var foundFalse = false;
        for (var f in flags) {
            if (!flags[f]) {
                foundFalse = true;
            }
        }
        return foundFalse ? null : logAll();
    };
    http.get(urlOne, function (res) {
        res.on('error', console.error);
        res.on('data', function (data) { return dataOne += data.toString(); });
        res.on('end', function () {
            flags.first = true;
            checkComplete();
        });
    });
    http.get(urlTwo, function (res) {
        res.on('error', console.error);
        res.on('data', function (data) { return dataTwo += data.toString(); });
        res.on('end', function () {
            flags.second = true;
            checkComplete();
        });
    });
    http.get(urlThree, function (res) {
        res.on('error', console.error);
        res.on('data', function (data) { return dataThree += data.toString(); });
        res.on('end', function () {
            flags.third = true;
            checkComplete();
        });
    });
}());
