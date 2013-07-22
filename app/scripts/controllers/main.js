'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile) {
    $scope.template;
    $scope.fields;
    $scope.skinConfiguration = [];

    $scope.$watch('template', function() {
        var tmpl = $compile($scope.template)($scope);
        console.log(tmpl);
        $('#templateContainer').html(tmpl);
    });

    $scope.$watch('fields', function() {
        if ($scope.fields !== undefined) {
            for (var i = 0; i < $scope.fields.length; i++) {
                $scope.skinConfiguration[$scope.fields[i]] = undefined;
            }
        }
    });

  });

function saveUserData() {
    var body = document.getElementsByTagName('body')[0];
    var scope = angular.element(body).scope();
    scope.$apply(function(){
        if ($('#template').val() != undefined && $('#fieldNames').val() != undefined) {
            scope.template = $('#template').val();
            scope.fields = $('#fieldNames').val().split(',');
        }
    });
}