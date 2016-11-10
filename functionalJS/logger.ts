'use strict';

(function() {

  function logger(str) {
    return function() {
      const args = [].slice.call(arguments);
      console.log.apply(null, [str].concat(args));
    };
  };

  module.exports = logger;

}());