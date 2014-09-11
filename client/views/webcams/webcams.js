(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope','wu', function($scope, wu){
    $scope.title = 'Webcams in Your Area';
    $scope.getWebcams = function(){
      wu.getWebcams($scope.zip).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();
