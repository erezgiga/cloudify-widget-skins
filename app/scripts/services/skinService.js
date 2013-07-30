'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .service('skinService', function skinService() {

    this.getSkins = function() {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));

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

    this.deleteSkin = function(skinName) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));

        for (var i = 0; i < skinsObj.skins.length; i++) {
            if (skinsObj.skins[i].name == skinName) {
                skinsObj.skins.splice(i, 1);
                break;
            }
        }

        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

    this.addSkin = function(newSkin) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));
        skinsObj.skins.push(newSkin);
        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

    this.updateSkin = function(skinName, skin) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));

        for (var i = 0; i < skinsObj.skins.length; i++) {
            if (skinsObj.skins[i].name == skinName) {
                skinsObj.skins[i] = skin;
                break;
            }
        }

        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

  });