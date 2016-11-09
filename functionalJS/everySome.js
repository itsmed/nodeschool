'use strict';
(function () {
    var checkUsersValid = function (goodUsers) {
        return function (users) {
            return users.every(function (user) { return goodUsers.indexOf(user) >= 0; });
        };
    };
    module.exports = checkUsersValid;
}());
