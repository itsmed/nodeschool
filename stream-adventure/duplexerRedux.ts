'use strict';

(function() {
  const duplex = require('duplexer');
  const through = require('through');
  module.exports = (counter) => {
    let countries = {};

    return duplex(through(countCountries, setCountries), counter);

    function countCountries(obj) {
      let country = obj.country;
      let count = countries[country] || 0;
      countries[country] = count + 1;
    }

    function setCountries() {
      counter.setCounts(countries);
      countries = {};
    }
  }

}());