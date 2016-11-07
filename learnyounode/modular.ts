'use strict';

const readsAddir = require('./makeItModular/index');

readsAddir(process.argv[2], process.argv[3], function(err, data) {
  data.forEach((file) => console.log(file));
});