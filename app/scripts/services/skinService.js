'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .service('skinService', function skinService() {

    this.currentSkinId = 0;

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

    this.deleteSkin = function(id) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));

        for (var i = 0; i < skinsObj.skins.length; i++) {
            if (skinsObj.skins[i].id == id) {
                skinsObj.skins.splice(i, 1);
                break;
            }
        }

        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

    this.addSkin = function(newSkin) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));
        newSkin.id = skinsObj.skins.length + 1;
        skinsObj.skins.push(newSkin);
        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

    this.updateSkin = function(id, skin) {
        var skinsObj = JSON.parse(localStorage.getItem('skins'));

        for (var i = 0; i < skinsObj.skins.length; i++) {
            if (skinsObj.skins[i].id == id) {
                skinsObj.skins[i] = skin;
                break;
            }
        }

        localStorage.setItem('skins', JSON.stringify(skinsObj));
    }

  });