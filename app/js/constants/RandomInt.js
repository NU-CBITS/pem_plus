(function() {
  'use strict';

  function randomInt(minimum, maximum) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return getRandomInt(minimum, maximum);
  }

  angular.module('cbitsPrototype.constants')
         .constant('randomInt', randomInt);
})();
