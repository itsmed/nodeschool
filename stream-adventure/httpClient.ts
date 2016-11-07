'use strict';

(function() {

  const request = require('request');

  const { stdin, stdout } = process;

  stdin.pipe(request.post('http://localhost:8099')).pipe(stdout);

}());