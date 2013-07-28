'use strict';

var app = angular.module('cloudifyWidgetSkinsApp', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/portal.html',
            controller: 'PortalCtrl'
        })
        .when('/widget/:skinId', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});