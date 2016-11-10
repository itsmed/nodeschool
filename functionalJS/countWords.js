'use strict';
(function () {
    var countWords = function (inputWords) {
        return inputWords.reduce(function (acc, current, i) {
            current in acc ? acc[current]++ : acc[current] = 1;
            return acc;
        }, {});
    };
    module.exports = countWords;
}());
