'use strict';

angular.module('scriptsApp')
  .directive('getTemplate', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the getTemplate directive');
      }
    };
  });
