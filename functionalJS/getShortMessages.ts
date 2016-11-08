'use strict';

(function() {

  const getShortMessages = (messages) => {
    return messages.filter((obj) => {
      return obj.message.length < 50
    }).reduce((arr, obj) => {
      return [...arr, ...obj.message]
    }, []);

  };

  module.exports = getShortMessages;

}());