(function() {
  'use strict';

  var User = {
    firstName:'Mary',
    startDate: new Date(),
    currentGoal: ''
  };

  angular.module('cbitsPrototype.constants')
         .constant('User', User);
})();
