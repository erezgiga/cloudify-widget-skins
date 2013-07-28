'use strict';

app.controller('PortalCtrl', function ($scope, skinService) {
    $scope.skins = skinService.getSkins();
});