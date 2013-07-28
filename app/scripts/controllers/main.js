'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile, skinService) {
        $scope.fields = "";

        var selectedSkin = window.location.hash.split('/').pop();
        if (selectedSkin != "Clean") {
            var skin = skinService.getSkin(selectedSkin);
            $scope.template = skin.template;
            $scope.fieldNames = JSON.stringify(skin.fields);
            $scope.backgroundColor = selectedSkin;
        }
  });
