(function () {
  'use strict';

  function IndexController($location) {

    this.login = function(){
      $location.url('/home');
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('IndexController',
    [ '$location',IndexController]);
})();
