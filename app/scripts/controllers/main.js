'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .controller('MainCtrl', function ($scope, $compile, skinService) {
        $scope.fields = "";

        var selectedSkin = window.location.hash.split('/').pop();
        var skin = skinService.getSkin(selectedSkin);

        $scope.template = skin.template;
        $scope.fieldNames = skin.fields;
        $scope.backgroundColor = skin.backgroundColor;

        $scope.saveTemplate = function() {
            var skin = {
                "name": "MySkin" + new Date().getMilliseconds(),
                "description": "My Skin description",
                "img": "http://www.cloudave.com/wordpress/wp-content/uploads/2011/09/gigaspaces.jpg",
                "backgroundColor": $("#twitterWidget").css("background-color"),
                "template": $scope.template,
                "fields": $scope.fieldNames
            };
            skinService.saveSkin(skin);
        }
  });
