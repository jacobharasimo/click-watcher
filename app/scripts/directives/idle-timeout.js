'use strict';

/**
 * @ngdoc directive
 * @name clickWatchApp.directive:idleTimeout
 * @description
 * # idleTimeout
 */
angular.module('clickWatchApp')
    .directive('idleTimeout', function () {
        return {
            template: null,
            templateUrl: null,
            restrict: 'A',
            scope:{'idleLimit':'@'},
            controller: function ($scope, $element) {
                if($scope.idleLimit==undefined){
                    console.log("pre-set limit")
                    $scope.idleLimit=60;
                };

                var _threshold = 1000;
                $scope._idleSecondsCounter = 0;
                $scope.isTimerRunning = false;

                $scope.resetTimer = function(){
                    console.log("timer reset");
                    $scope.IDLE_TIMEOUT = $scope.idleLimit; //seconds
                    $scope._idleSecondsCounter = 0;
                };
                $scope.stopTimer = function(){
                    if($scope.idleTimer){
                        console.log("limit ended");
                        window.clearInterval($scope.idleTimer)
                        $scope.isTimerRunning = false;
                    }
                };
                $scope.CheckIdleTime = function() {
                    $scope._idleSecondsCounter++;
                    console.log("timer: "+$scope._idleSecondsCounter);
                    if ($scope._idleSecondsCounter >= $scope.IDLE_TIMEOUT) {
                        $scope.stopTimer();
                    }
                };
                $scope.startTimer = function(){
                    console.log("Start timer");
                    $scope.isTimerRunning = true;
                    $scope.idleTimer = window.setInterval($scope.CheckIdleTime,_threshold);
                };
            },
            link: function postLink(scope, element, attrs) {
                element.bind("click keypress ontouchend",function(e){
                    console.log(e.type);
                    if(scope.isTimerRunning){
                        scope.resetTimer();
                    }
                    else{
                        scope.startTimer();
                    }
                });


            }
        };
    });
