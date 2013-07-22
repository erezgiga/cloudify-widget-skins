'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('getHtml', function () {
    return {
      template: '<textarea rows="10" cols="40" readonly></textarea>',
      replace:true,
      restrict: 'A',
        scope:{
            "targetId":"@",
            "valueHolder":"="
        },
      link: function postLink(scope, element, attrs) {
          scope.$watch('valueHolder', function() {
              element.val($("#" + scope.targetId)[0].outerHTML);
          },true);
      }
    };
  });
