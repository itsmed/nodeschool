'use strict';

(function() {

  const checkUsersValid = (goodUsers) => {

    return (users) => {

      return users.every(user => goodUsers.indexOf(user) >= 0);

    };

  };

  module.exports = checkUsersValid;

}());