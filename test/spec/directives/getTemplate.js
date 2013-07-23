'use strict';

describe('Directive: getTemplate', function () {
  beforeEach(module('cloudifyWidgetSkinsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<get-template></get-template>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the getTemplate directive');
  }));
});
