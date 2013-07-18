'use strict';

describe('Directive: getHtml', function () {
  beforeEach(module('cloudifyWidgetSkinsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<get-html></get-html>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the getHtml directive');
  }));
});
