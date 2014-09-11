/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.temp = response.data.current_observation.temp_f;
        $scope.icon_url = response.data.current_observation.icon_url;
        $scope.weather = response.data.current_observation.weather;
        $scope.wind = response.data.current_observation.wind_string;
        $scope.humidity = response.data.current_observation.relative_humidity;
      });
    };
  }]);

})();
