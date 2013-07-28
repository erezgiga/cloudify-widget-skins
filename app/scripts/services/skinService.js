'use strict';

angular.module('cloudifyWidgetSkinsApp')
  .service('skinService', function skinService() {

    this.getSkins = function() {
        return JSON.parse(localStorage.getItem('skins'));
    }

    this.getSkin = function(skinName) {
        var skin = JSON.parse(localStorage.getItem('skinProps'));

        skin.name = skinName;
        skin.backgroundColor = skinName;

        return skin;
    }

    this.saveSkin = function(skin) {}

    this.deleteSkin = function(skinName) {}

    this.addSkin = function(newSkin) {}

    this.updateSkin = function(skinName, skin) {}

  });

// LocalStorage Mockups - to be removed after Node server is done
if(typeof(Storage)!=="undefined")
{
    var skinsJSON = {
        "skins": [
            {"name": "Green", "img": "http://www.aiche.org/sites/default/files/styles/aiche_content/public/images/webinar/global_sustainability-green-green-green.jpg", "description": "Green skin"},
            {"name": "Red", "img": "http://blogs.telegraph.co.uk/culture/files/2011/01/red-light-wallpapers_13156_2560x1920.jpg", "description": "Red skin"},
            {"name": "Blue", "img": "http://lovely-pics.com/data/media/21/ripple_blue__win_xp_theme.jpg", "description": "Blue skin"},
            {"name": "Yellow", "img": "http://www.thewritingnut.com/wp-content/uploads/2011/04/yellow-rose-800.jpg", "description": "Yellow skin"}
        ]
    };

    localStorage.setItem('skins', JSON.stringify(skinsJSON));

    var skinProps = {
        "name": "",
        "backgroundColor": "",
        "template": "<div><div id='twitterWidget' style='background-color:{{backgroundColor}}'><iframe id='preview' ng-src='/views/skins/twitter.html?widgetId={{widgetId}}&twitterAccount={{twitterAccount.name}}' scrolling='no'></iframe><div id='generatedCode' ng-show='!!showCode'><input type='button' id='closeBtn' value='X' ng-click='showCode=false'/><div get-html target-id='preview' value-holder='widgetId'></div></div></div></div>",
        "fields": {
            "fields": [
                {
                    "control": "select",
                    "name": "twitterAccount",
                    "label": "Twitter Account",
                    "options": [{"name":"erezcarmel"},{"name":"guymugrabi"}]
                },
                {
                    "control": "input",
                    "type": "color",
                    "name": "backgroundColor",
                    "label": "Background Color"
                },
                {
                    "control": "input",
                    "type": "text",
                    "name": "widgetId",
                    "label": "Widget ID"
                }
            ]
        }
    }

    localStorage.setItem('skinProps', JSON.stringify(skinProps));
}