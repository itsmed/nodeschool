'use strict';

(function() {

  const logger = (str) => {

    return console.log.bind(null, str);

  };

  module.exports = logger;

}());