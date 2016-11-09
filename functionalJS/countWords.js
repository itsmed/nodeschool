'use strict';
(function () {
    var countWords = function (inputWords) {
        return inputWords.reduce(function (acc, current, i) {
            console.log(i, 'n\ac\n', acc, '\n\ncurr\n', current);
            current in acc ? acc[current]++ : acc[current] = 1;
            return acc;
        }, {});
    };
    module.exports = countWords;
}());
