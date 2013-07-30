'use strict';

describe('Directive: getConfiguration', function () {
  beforeEach(module('cloudifyWidgetSkinsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<get-configuration></get-configuration>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the getConfiguration directive');
  }));
});
