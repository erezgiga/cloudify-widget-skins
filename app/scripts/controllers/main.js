'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile) {
    $scope.template;
    $scope.fields;
    $scope.skinConfiguration = [];

    $scope.$watch('fields', function() {
        if ($scope.fields !== undefined) {
            var fieldsArr = $scope.fields.split(',');
            for (var f in fieldsArr) {
                $scope.skinConfiguration[f] = undefined;
            }
        }
    });
  });

function saveUserData() {
    var body = document.getElementsByTagName('body')[0];
    var scope = angular.element(body).scope();
    scope.$apply(function(){
        if ($('#fieldNames').val() != undefined) {
            scope.fields = $('#fieldNames').val();
        }
    });
}