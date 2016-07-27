(function () {
  'use strict';

  function SettingsController() {

    this.appName = 'RADAR';
    this.currentUser = 'user';
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('SettingsController',
    [ SettingsController]);
})();
