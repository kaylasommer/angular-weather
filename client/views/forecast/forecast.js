/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope', 'wu', function($scope, wu){
    $scope.title = '10 Day Forecast';
    $scope.getForecast = function(){
      wu.getForecast($scope.zip).then(function(response){
        $scope.forecast = response.data.forecast.txt_forecast.forecastday;
      });
    };
  }]);
})();
