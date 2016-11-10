'use strict';
(function () {
    var reduce = function (arr, callback, accumulator) {
        var len = 0;
        var reducer = function (count, xs, acc, callback) {
            // previousValue, currentValue, index and the array we're iterating over
            if (count === xs.length) {
                return acc;
            }
            acc = callback(acc, xs[count], count, xs);
            return reducer(count + 1, xs, acc, callback);
        };
        return reducer(len, arr, accumulator, callback);
    };
    module.exports = reduce;
}());
/*
function reduce(array, callback) {
  for (var i = 0; i  < array.length; i++) {
    callback(array[i], i, array);
  }
}
*/ 
