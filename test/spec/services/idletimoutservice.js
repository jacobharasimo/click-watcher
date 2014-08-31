'use strict';

describe('Service: idleTimoutService', function () {

  // load the service's module
  beforeEach(module('clickWatchApp'));

  // instantiate service
  var idleTimoutService;
  beforeEach(inject(function (_idleTimoutService_) {
    idleTimoutService = _idleTimoutService_;
  }));

  it('should do something', function () {
    expect(!!idleTimoutService).toBe(true);
  });

});
