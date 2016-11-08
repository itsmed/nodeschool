'use strict';
(function () {
    var duplex = require('duplexer');
    var through = require('through');
    module.exports = function (counter) {
        var countries = {};
        return duplex(through(countCountries, setCountries), counter);
        function countCountries(obj) {
            var country = obj.country;
            var count = countries[country] || 0;
            countries[country] = count + 1;
        }
        function setCountries() {
            counter.setCounts(countries);
            countries = {};
        }
    };
}());
