'use strict';
var readsAddir = require('./makeItModular/index');
readsAddir(process.argv[2], process.argv[3], function (err, data) {
    data.forEach(function (file) { return console.log(file); });
});
