(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){
    function getUrl(service, zip){
      return 'http://api.wunderground.com/api/8674e8df3b407733/'+service+'/q/'+zip+'.json?callback=JSON_CALLBACK';
    }
    function getConditions(zip){
      var url = getUrl('conditions', zip);
      $http.jsonp(url);
    }
    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      $http.jsonp(url);
    }
    return {getConditions: getConditions, getWebcams:getWebcams};
  }]);
})();
