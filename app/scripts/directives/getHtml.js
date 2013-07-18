'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('getHtml', function () {
    return {
      template: '<textarea rows="10" cols="40" readonly/>',
      replace:true,
      restrict: 'A',
        scope:{
            "targetId":"@",
            "valueHolder":"="
        },
      link: function postLink(scope, element, attrs) {
          scope.$watch('valueHolder',function(){
              console.log("I have a new value!");
              element.val($("#" + scope.targetId)[0].outerHTML);
          },true);
      }
    };
  });
