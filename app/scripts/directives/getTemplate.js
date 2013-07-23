'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('getTemplate', function ($compile) {
    return {
        template: '<div></div>',
        restrict: 'A',
        scope: true,
        link: function ( scope, element, attrs ) {
            var el;

            attrs.$observe( 'template', function ( tpl ) {
                if ( angular.isDefined( tpl ) && tpl != "") {
                    el = $compile( tpl )( scope );
                    element.html("");
                    element.append( el );
                }
            });
        }
    };
  });
