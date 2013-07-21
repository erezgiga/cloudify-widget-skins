'use strict';

function Customize($scope) {

    $scope.skinConfiguration = {"widgetId":null, "twitterAccount":null}

    $scope.getCode = function() {
        var iframeCode = $("#preview")[0].outerHTML;

        $("#form :input").attr("disabled", true);
        $("#code").val(iframeCode);
        $("#generatedCode").show();
    };

//    $scope.closePopup = function() {
//        $("#form :input").attr("disabled", false);
//        $("#code").empty();
//        $("#generatedCode").hide();
//    }

    $("#generatedCode").hide();

};