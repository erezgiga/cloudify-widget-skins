'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .service('skinService', function skinService() {

    this.getSkins = function() {
        var skinsObj = JSON.parse(localStorage.getItem('skins'))
        return skinsObj;
    }

    this.getSkin = function(skinName) {
        var skin, skinsObj = JSON.parse(localStorage.getItem('skins'));
        for (var i = 0; i < skinsObj.skins.length; i++) {
            if (skinsObj.skins[i].name == skinName) {
                skin = skinsObj.skins[i];
                break;
            }
        }
        return skin;
    }

    this.saveSkin = function(skin) {
        localStorage.setItem('skinProps', JSON.stringify(skin));

        var skinsObj = JSON.parse(localStorage.getItem('skins'));
        skinsObj.skins.push(skin);
        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

    this.deleteSkin = function(skinName) {}

    this.addSkin = function(newSkin) {}

    this.updateSkin = function(skinName, skin) {}
  });