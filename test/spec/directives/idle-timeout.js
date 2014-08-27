'use strict';

describe('Directive: idleTimeout', function () {

  // load the directive's module
  beforeEach(module('clickWatchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<idle-timeout></idle-timeout>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the idleTimeout directive');
  }));
});
