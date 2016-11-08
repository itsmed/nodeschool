'use strict';
(function () {
    var getShortMessages = function (messages) {
        return messages.filter(function (obj) {
            return obj.message.length < 50;
        }).reduce(function (arr, obj) {
            return arr.concat(obj.message);
        }, []);
    };
    module.exports = getShortMessages;
}());
