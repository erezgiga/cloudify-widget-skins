'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('metaField', function ( $compile ) {
    return {
      template: '<div></div>',
      restrict: 'A',

        scope:true,
      link: function(scope, element, attrs) {
          attrs.$observe( 'fieldName',function( value ){
              console.log(["appending",value]);
              var myTemplate =  "<label>" + value + "<input ng-model=\"" + value + "\"/><div>{{" + value + "}}</div></label>"
               element.append( $compile( myTemplate )(scope) );
          });
      }
    };
  });
