'use strict';
(function () {
    function duckCount() {
        var args = [].slice.call(arguments);
        return args.filter(function (obj) { return Object.hasOwnProperty.call(obj, 'quack'); }).length;
    }
    ;
    module.exports = duckCount;
}());
