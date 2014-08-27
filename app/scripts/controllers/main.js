'use strict';

/**
 * @ngdoc function
 * @name clickWatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickWatchApp
 */
angular.module('clickWatchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
