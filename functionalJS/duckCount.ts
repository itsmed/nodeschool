'use strict';

(function() {

  function duckCount() {
    let args = [].slice.call(arguments);

    return args.filter(obj => Object.hasOwnProperty.call(obj, 'quack')).length;
  };

  module.exports = duckCount;

}());