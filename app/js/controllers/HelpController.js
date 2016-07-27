(function () {
  'use strict';

  function HelpController() {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HelpController',
    [HelpController]);
})();
