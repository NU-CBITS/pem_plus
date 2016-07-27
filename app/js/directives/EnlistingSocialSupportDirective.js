(function() {
  'use strict';

  function enlistingSocialSupport($modal,configurationModalService) {
    return {
        restrict: 'E',
        template: 
          '<a class="btn btn-info wide" ng-click="openSocialSupportModal()">' +
          'Enlisting Your Social Support' +
          '</a>',
        link: function (scope) { 
          scope.openSocialSupportModal = function() {
            configurationModalService.openSocialSupportModal($modal);
          }; 
        }
    };
  }

  angular.module('cbitsPrototype.directives')
    .directive(
        'enlistingsocialsupport', ['$modal', 'configurationModalService', enlistingSocialSupport]
    );
})();