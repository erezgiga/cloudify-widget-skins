'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile, $location, skinService) {

        var selectedSkin = window.location.hash.split('/').pop();
        var skin = skinService.getSkin(selectedSkin);

        function init () {
            $scope.fields = "";
            $scope.template = skin.template;
            $scope.fieldNames = skin.fields;
            $scope.backgroundColor = skin.backgroundColor;
            $scope.name = skin.name;
            $scope.thumb = skin.thumb;
        }

        $scope.updateSkin = function() {
            var skin = createSkinObject();
            skinService.updateSkin(skin);
        }

        $scope.addSkin = function() {
            var newSkin = createSkinObject();
            skinService.addSkin(newSkin);
        }

        $scope.deleteSkin = function() {
            skinService.deleteSkin(skin.name);
            $location.path('/');
        }

        function createSkinObject() {
            var skin = {
                "name": $scope.name,
                "description": $scope.name + " description",
                "thumb": $scope.thumb,
                "backgroundColor": $("#twitterWidget").css("background-color"),
                "template": $scope.template,
                "fields": $scope.fieldNames
            };
            return skin;
        }

        init();
  });
