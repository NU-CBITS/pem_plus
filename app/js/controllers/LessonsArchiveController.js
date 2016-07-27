(function () {
  'use strict';

  function LessonsArchiveController($location, LessonPlans) {

    this.lessons = LessonPlans;

    this.goToLesson = function (lessonNumber){
      $location.path('/lessons_current');
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('LessonsArchiveController',
    [ '$location', 'LessonPlans', LessonsArchiveController]);
})();
