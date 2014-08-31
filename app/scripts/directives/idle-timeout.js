'use strict';

/**
 * @ngdoc directive
 * @name clickWatchApp.directive:idleTimeout
 * @description
 * # idleTimeout
 */
angular.module('clickWatchApp')
    .directive('idleTimeout', function (idleTimoutService) {
        return {
            template: null,
            templateUrl: null,
            restrict: 'A',
            scope: {'idleLimit': '@'},
            controller: function ($scope, $element) {

            },
            link: function postLink(scope, element, attrs) {
                scope.idleTimoutService = idleTimoutService;
                if(scope.idleLimit!==null || scope.idleLimit!==undefined){
                    scope.idleTimoutService.setIdleLimit(scope.idleLimit);
                }

                element.bind('click keypress ontouchend', function (e) {
                    console.log(e.type);
                    if (scope.idleTimoutService.isTimerRunning()) {
                        scope.idleTimoutService.resetTimer();
                    } else {
                        scope.idleTimoutService.startTimer();
                    }
                });

            }
        };
    });
