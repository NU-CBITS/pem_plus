(function () {
  'use strict';

  function HandbooksController($location, $filter, LessonPlans) {

  	this.availableLessonPlans = $filter('filter')(LessonPlans,{available:true});
  	
  	this.availableHandbooks = function(){
	  	var availableHandbooks = new Array();
	  	for (var i=0; i < this.availableLessonPlans.length; i++){
	  		for (var i2=0; i2 < this.availableLessonPlans[i].modules.length; i2++){

	  			if (this.availableLessonPlans[i].modules[i2].type == 'handbook'){
	  			availableHandbooks.push(this.availableLessonPlans[i].modules[i2])
	  			}	
	  		
	  		}
	  	}

	  	return availableHandbooks
	 }
  
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HandbooksController',
    [ '$location', '$filter', 'LessonPlans', HandbooksController]);
})();
