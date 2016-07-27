(function() {
  'use strict';

  function asyncContent($filter, $http) {

    var promise;
    
    this.getContent = function(contentPath) {
      if ( !promise ) {
        promise = $http.get(contentPath).then(function (response) {
          return response.data
        });
      }
      return promise;
    }
  
  }

  function AsyncContentFactory($filter, $http) {
    return new asyncContent($filter, $http);
  }

  angular.module('cbitsPrototype.services')
    .factory('contentService',
    [ '$filter',
      '$http',
      AsyncContentFactory]);
})();
