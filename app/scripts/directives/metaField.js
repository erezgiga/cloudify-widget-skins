'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('metaField', function ( $compile , $rootScope ) {
    return {
        restrict: 'A',
        scope:true,
        link: function(scope, element, attrs) {
          attrs.$observe( 'fieldName',function( value ){
                console.log(value);
                var myTemplate =  "<input ng-model=\"" + value + "\"/>"
                element.append( $compile( myTemplate )($rootScope) );
          });
        }
    };
  });
