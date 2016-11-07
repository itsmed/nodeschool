'use strict';

(function() {
  const spawn = require('child_process').spawn;
  const duplexer = require('duplexer2');

  module.exports = (cmd, args) => {
    const childProcess = spawn(cmd, args);
    return duplexer(childProcess.stdin, childProcess.stdout);
  }
}());