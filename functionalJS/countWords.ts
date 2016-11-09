'use strict';

(function() {

  const countWords = (inputWords: string[]) => {

    return inputWords.reduce((acc, current, i) => {
      current in acc ? acc[current]++ : acc[current] = 1;
      return acc;
    }, {})

  };

  module.exports = countWords;

}());