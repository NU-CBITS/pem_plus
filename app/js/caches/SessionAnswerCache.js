(function() {
  'use strict';

  function SessionAnswer(cache) {
    this.KEY = 'sessionQuestionAnswers';

    cache.delegate(this, 'persist');
    cache.delegate(this, 'fetchAllRaw');
    cache.delegate(this, 'destroyAll');
    cache.delegate(this, 'fetchAllDirty');
    cache.delegate(this, 'markClean');
  }

  function SessionAnswerCache(resourceCache) {
    return new SessionAnswer(resourceCache);
  }

  angular.module('cbitsPrototype.services')
    .factory('sessionAnswerCache', ['resourceCache', SessionAnswerCache]);
})();
