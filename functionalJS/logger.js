'use strict';
(function () {
    function logger(str) {
        return function () {
            var args = [].slice.call(arguments);
            console.log.apply(null, [str].concat(args));
        };
    }
    ;
    module.exports = logger;
}());
