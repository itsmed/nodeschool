'use strict';

(function() {

  function arrayMap(arr, fn, context) {
    return arr.reduce(function(acc, item) {
      acc.push(fn.call(context, item));
      return acc;
    }, []);
  };

  module.exports = arrayMap;

}());