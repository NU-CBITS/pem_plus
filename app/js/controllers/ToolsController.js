(function () {
  'use strict';

  function ToolsController($routeParams) {

  	this.partial = $routeParams.partial;
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('ToolsController',
    [ '$routeParams',ToolsController]);
})();
