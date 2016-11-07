'use strict';
module.exports = function readsAddir(dirName, fileExtension, callback) {
    var fs = require('fs');
    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err);
        }
        var list;
        var extension = '.' + fileExtension;
        list = files.filter(function (file) { return file.includes(extension); });
        return callback(null, list);
    });
};
