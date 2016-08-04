(function () {
  'use strict';

  function CheckOutController() {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('CheckOutController',
    [CheckOutController]);
})();
