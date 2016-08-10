(function () {
  'use strict';

  function CheckOutController($filter) {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }

    this.activity_setting = null;

    this.pem = {};

    this.pem.activities = [

      {
        group:'Home', 
        activities:[                
          'Getting rest',
          'Personal care management',
          'Getting clean', 
          'Mealtime',
          'Cleaning up',
          'Meal preparation',
          'Taking care of other family members',
          'Dishes/ laundry',
          'Arts, crafts, stories, music',
          'Screen time',
          'Indoor play / games',
          'Celebrations at home',
          'House guests'
        ]
      },      
      {
        group:'Daycare/Preschool', 
        activities:[
          'Group learning',
          'Field trips/ events',
          'Socializing with friends'
        ]
      },{
        group:'Community', 
        activities:[ 
          'Shopping/ errands',
          'Dining out',
          'Routine appointments',
          'Classes/ lessons',
          'Organized physical activities',
          'Community attractions',
          'Religious/ spiritual gatherings',
          'Social gatherings',
          'Community events',
          'Unstructured physical activities',
          'Overnight visits/ trips'
        ]
      },
    ];

  this.activityPriorityMoveDown = function(index) {
    //would move the element in the array down one position
  }

  this.activityPriorityMoveUp = function(index) {
    //would move the element in the array up one position
  }

  this.selectSetting = function(setting){

    var activities = $filter('filter')(this.pem.activities,{group:this.activity_setting})[0]
    return activities

  }
}

  angular.module('cbitsPrototype.controllers')
    .controller('CheckOutController',
    ['$filter',CheckOutController]);
})();
