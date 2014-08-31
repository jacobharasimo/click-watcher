'use strict';

/**
 * @ngdoc service
 * @name clickWatchApp.idleTimoutService
 * @description
 * # idleTimoutService
 * Service in the clickWatchApp.
 */
angular.module('clickWatchApp')
    .service('idleTimoutService', function idleTimoutService() {
        var _that, _idleLimit, _idleSecondsCounter, _idleTimer, _isTimerRunning, _threshold;
        _idleLimit = 60;
        _threshold = 1000;
        _idleSecondsCounter = 0;
        _isTimerRunning = false;
        _idleTimer = null;
        _that = this;
        this.setIdleLimit = function (value){
            _idleLimit = value;
        };
        this.isTimerRunning = function(){
            return _isTimerRunning;
        };
        this.resetTimer = function () {
            console.log('timer reset');
            _idleSecondsCounter = 0;
        };
        this.stopTimer = function () {
            if (_idleTimer) {
                //surveyData.setStartTime = null;
                console.log('timer ended');
                window.clearInterval(_idleTimer);
                _isTimerRunning = false;
                //$state.go('template');
            }
        };
        this.CheckIdleTime = function () {
            _idleSecondsCounter++;
            console.log('timer tick: ' + _idleSecondsCounter);
            if (_idleSecondsCounter >= _idleLimit) {
                _that.stopTimer();
            }
        };
        this.startTimer = function() {
            console.log('Start timer');
            _isTimerRunning = true;
            _idleSecondsCounter = 0;
            _idleTimer = window.setInterval(this.CheckIdleTime, _threshold);
        };
    });
