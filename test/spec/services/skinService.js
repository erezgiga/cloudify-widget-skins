'use strict';

describe('Service: skinService', function () {

  // load the service's module
  beforeEach(module('cloudifyWidgetSkinsApp'));

  // instantiate service
  var skinService;
  beforeEach(inject(function (_skinService_) {
    skinService = _skinService_;
  }));

  it('should do something', function () {
    expect(!!skinService).toBe(true);
  });

});
