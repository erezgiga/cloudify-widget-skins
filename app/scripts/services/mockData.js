var skinsJSON = {
    "skins": [
        {
            "name": "Green",
            "thumb": "http://www.aiche.org/sites/default/files/styles/aiche_content/public/images/webinar/global_sustainability-green-green-green.jpg",
            "description": "Green skin",
            "backgroundColor": "green",
            "template": "<div><div id='twitterWidget' style='background-color:{{backgroundColor}}'><iframe id='preview' ng-src='/views/skins/twitter.html?widgetId={{widgetId}}&twitterAccount={{twitterAccount.name}}' scrolling='no'></iframe><div id='generatedCode' ng-show='!!showCode'><input type='button' id='closeBtn' value='X' ng-click='showCode=false'/><div get-html target-id='preview' value-holder='widgetId'></div></div></div></div>",
            "fields": '{"fields": [{"control": "select","name": "twitterAccount","label": "Twitter Account","options": [{"name":"erezcarmel"},{"name":"guymugrabi"}]},{"control": "input","type": "color","name": "backgroundColor","label": "Background Color"},{"control": "input","type": "text","name": "widgetId","label": "Widget ID"}]}'
        },
        {
            "name": "Red",
            "thumb": "http://blogs.telegraph.co.uk/culture/files/2011/01/red-light-wallpapers_13156_2560x1920.jpg",
            "description": "Red skin",
            "backgroundColor": "red",
            "template": "<div><div id='twitterWidget' style='background-color:{{backgroundColor}}'><iframe id='preview' ng-src='/views/skins/twitter.html?widgetId={{widgetId}}&twitterAccount={{twitterAccount.name}}' scrolling='no'></iframe><div id='generatedCode' ng-show='!!showCode'><input type='button' id='closeBtn' value='X' ng-click='showCode=false'/><div get-html target-id='preview' value-holder='widgetId'></div></div></div></div>",
            "fields": '{"fields": [{"control": "select","name": "twitterAccount","label": "Twitter Account","options": [{"name":"erezcarmel"},{"name":"guymugrabi"}]},{"control": "input","type": "color","name": "backgroundColor","label": "Background Color"},{"control": "input","type": "text","name": "widgetId","label": "Widget ID"}]}'
        },
        {
            "name": "Blue",
            "thumb": "http://lovely-pics.com/data/media/21/ripple_blue__win_xp_theme.jpg",
            "description": "Blue skin",
            "backgroundColor": "blue",
            "template": "<div><div id='twitterWidget' style='background-color:{{backgroundColor}}'><iframe id='preview' ng-src='/views/skins/twitter.html?widgetId={{widgetId}}&twitterAccount={{twitterAccount.name}}' scrolling='no'></iframe><div id='generatedCode' ng-show='!!showCode'><input type='button' id='closeBtn' value='X' ng-click='showCode=false'/><div get-html target-id='preview' value-holder='widgetId'></div></div></div></div>",
            "fields": '{"fields": [{"control": "select","name": "twitterAccount","label": "Twitter Account","options": [{"name":"erezcarmel"},{"name":"guymugrabi"}]},{"control": "input","type": "color","name": "backgroundColor","label": "Background Color"},{"control": "input","type": "text","name": "widgetId","label": "Widget ID"}]}'
        },
        {
            "name": "Yellow",
            "thumb": "http://www.thewritingnut.com/wp-content/uploads/2011/04/yellow-rose-800.jpg",
            "description": "Yellow skin",
            "backgroundColor": "yellow",
            "template": "<div><div id='twitterWidget' style='background-color:{{backgroundColor}}'><iframe id='preview' ng-src='/views/skins/twitter.html?widgetId={{widgetId}}&twitterAccount={{twitterAccount.name}}' scrolling='no'></iframe><div id='generatedCode' ng-show='!!showCode'><input type='button' id='closeBtn' value='X' ng-click='showCode=false'/><div get-html target-id='preview' value-holder='widgetId'></div></div></div></div>",
            "fields": '{"fields": [{"control": "select","name": "twitterAccount","label": "Twitter Account","options": [{"name":"erezcarmel"},{"name":"guymugrabi"}]},{"control": "input","type": "color","name": "backgroundColor","label": "Background Color"},{"control": "input","type": "text","name": "widgetId","label": "Widget ID"}]}'
        }
    ]
};

if(typeof(Storage) !== "undefined")
{
    if (localStorage.getItem('skins') == null) {
        localStorage.setItem('skins', JSON.stringify(skinsJSON));
    }
}