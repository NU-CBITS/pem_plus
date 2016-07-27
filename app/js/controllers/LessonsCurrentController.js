(function () {
  'use strict';

  function LessonsCurrentController($location, $routeParams, LessonPlans) {
    this.lessonPlan = LessonPlans;
    this.currentLessonPlan = parseInt($routeParams.lessons_index) || 0;
    this.currentLessonCounter = parseInt(this.currentLessonPlan) + 1;
  }

  angular.module('cbitsPrototype.controllers')
    .controller('LessonsCurrentController',
    [ '$location','$routeParams','LessonPlans',LessonsCurrentController]);
})();
