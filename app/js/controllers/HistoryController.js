(function () {
  'use strict';

  function HistoryController($location) {

    this.olderPostsVisible = false;

    this.showOlderPosts = function(){
      this.olderPostsVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('HistoryController',
    [ '$location',HistoryController]);
})();
