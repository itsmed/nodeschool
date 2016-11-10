'use strict';
(function () {
    var logger = function (str) {
        return console.log.bind(null, str);
    };
    module.exports = logger;
}());
