'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .directive('getConfiguration', ["$location", "skinService", function ($location, skinService) {
    return {
      template: '<div id="userForm">' +
              '<h3>Skin configuration</h3>' +
              '<div class="userFormField">' +
                'Name:' +
                '<input type="text" id="name" ng-model="name">' +
                '</div>' +
                '<div class="userFormField">' +
                    'Thumbnail' +
                    '<input type="text" id="thumb" ng-model="thumb">' +
                '</div>' +
                '<div class="userFormField">' +
                    'Template code:' +
                    '<textarea id="template" ng-model="template"></textarea>' +
                '</div>' +
                '<div class="userFormField">' +
                    'Field names:<br/>' +
                    '{control, name, label, [type, options{name}]}' +
                    '<textarea ng-model="fieldNames" id="fieldNames"></textarea>' +
                '</div>' +

                '<input type="button" value="Save" id="saveButton" class="saveButton" ng-click="updateSkin();"/>' +
                '<input type="button" value="Save New" id="saveNewButton" class="saveButton" ng-click="addSkin();"/>' +
                '<input type="button" value="Delete" id="deleteBtn" ng-click="deleteSkin(skin.name);"/>' +
            '</div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          scope.updateSkin = function() {
              var skin = createSkinObject();
              skinService.updateSkin(skinService.currentSkinId, skin);
          }

          scope.addSkin = function() {
              var newSkin = createSkinObject();
              skinService.addSkin(newSkin);
          }

          scope.deleteSkin = function() {
              skinService.deleteSkin(skinService.currentSkinId);
              $location.path('/');
          }

          function createSkinObject() {
              var skin = {
                  "name": scope.name,
                  "description": scope.name + " description",
                  "thumb": scope.thumb,
                  "backgroundColor": $("#twitterWidget").css("background-color"),
                  "template": scope.template,
                  "fields": scope.fieldNames
              };
              return skin;
          }
      }
    };
  }]);
