(function () {
  'use strict';

  function NavBarController($location,User,Site) {

    this.userName = User.firstName;
    this.brand = Site.brand;

    this.newTasks= function(taskType){

      var newTaskNotification = false;

      switch (taskType) {
        case 'lessons':
        newTaskNotification = true;
        break;
        case 'srm':
        newTaskNotification = true;
        break;
      }
      return newTaskNotification
    }
    
  }

  angular.module('cbitsPrototype.controllers')
    .controller('NavBarController',
    [ '$location', 'User', 'Site', NavBarController]);
})();
