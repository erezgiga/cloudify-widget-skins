'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile, $location, skinService) {

        var selectedSkinName = window.location.hash.split('/').pop();
        var skin = skinService.getSkin(selectedSkinName);

        function init () {
            $scope.fields = "";
            $scope.template = skin.template;
            $scope.fieldNames = skin.fields;
            $scope.backgroundColor = skin.backgroundColor;
            $scope.name = skin.name;
            $scope.thumb = skin.thumb;
            $scope.id = skin.id;

            skinService.currentSkinId = skin.id;
        }

        init();
  });
