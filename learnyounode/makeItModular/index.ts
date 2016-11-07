'use strict';

module.exports = function readsAddir(dirName, fileExtension, callback) {
  const fs = require('fs');

  fs.readdir(dirName, function(err, files): string[] {
    if(err) {
      return callback(err);
    }
    let list: string[];
    let extension: string = '.' + fileExtension;
    list = files.filter((file) => file.includes(extension));
    return callback(null, list);
  });
}