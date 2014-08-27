'use strict';

/**
 * @ngdoc function
 * @name clickWatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clickWatchApp
 */
angular.module('clickWatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
