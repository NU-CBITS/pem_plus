(function() {
  'use strict';

  function SessionsController(contentService,
                              $sce, $filter, Routes,
                              $location, $routeParams) {

    self = this;

    this.SESSION_CONTENT_PATH = 'content/SessionContentBITCORE.json';
    this.rawLessonContent = null;
    this.currentSlideIndex = 0;
    this.slides = [{body:''}];
    this.lessonMetaData = null;
    this.lessonTitle = null;
    this.returnRoute = $routeParams.onEndURI || '/home';
    this.sessionId = $routeParams.lessonId || null;
    this.currentSessionComplete = null;
    this.currentSessionNumber = null;

    this.filterLessonContent = function(data, sessionId){
      var filteredLessonContent = {};
      for(var i = 0; i < data.length; i++){
        if(data[i].lesson.id == sessionId){
          filteredLessonContent = data[i];
          break;
        }
      }
      return filteredLessonContent
    };

    this.getSessionContent = function(lessonId, contentPath){
      contentService.getContent(contentPath).then(function(data){
        console.log(data);
        self.rawLessonContent = self.filterLessonContent(data,self.sessionId);
        self.slides = self.rawLessonContent.slides;
        self.lessonMetaData = self.rawLessonContent.lesson;
        self.lessonTitle = self.lessonMetaData.title;
      });
    };

    this.cleanSlideContent = function(content){
      var cleanedSlideContent = unescape(content);
      cleanedSlideContent.replace(/\*/g,'');
      return cleanedSlideContent
    }

    this.slideContent = function(){
      var slideContent = this.slides[this.currentSlideIndex].body;
      slideContent = this.cleanSlideContent(slideContent);
      return $sce.trustAsHtml(slideContent)
    };

    this.slideTitle = function(){
      var slideContent = this.slides[this.currentSlideIndex].title;
      slideContent = this.cleanSlideContent(slideContent);
      return $sce.trustAsHtml(slideContent)
    };

    this.next = function() {
      this.currentSlideIndex++;
    };

    this.back = function() {
      this.currentSlideIndex--;
    };

    this.finish = function(){
      $location.url(this.returnRoute);
    };

    this.showNextButton = function(){
      var buttonVisible = this.currentSlideIndex <= this.slides.length-2;
      return buttonVisible
    };

    this.showBackButton = function(){
      var buttonVisible = this.currentSlideIndex > 0;
      return buttonVisible
    };

    this.showFinishedLink = function(){
      var buttonVisible = !this.showNextButton();
      return buttonVisible
    };

    this.getSessionContent(this.sessionId,this.SESSION_CONTENT_PATH);

  }

  angular.module('cbitsPrototype.controllers')
    .controller('SessionsController',
    ['contentService',
     '$sce',
     '$filter',
     'Routes',
     '$location',
     '$routeParams',
     '$anchorScroll',
     SessionsController]);
})();
