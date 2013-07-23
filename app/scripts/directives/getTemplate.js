'use strict';

angular.module('cloudifyWidgetSkinsApp')
    .directive('getTemplate', function ($compile) {
        return {
            template: '<div></div>',
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var el;

                attrs.$observe('template', function (tpl) {
                    if (angular.isDefined(tpl) && tpl != "") {

                        var div = "<div id='configuration'>" +
                                "<div class='detailBox' ng-repeat='field in fieldNames.split(\",\")'>" +
                                    "{{field}}" +
                                    "<div meta-field field-name='{{field}}'></div>" +
                                "</div>" +
                                "<div id='buttons'>" +
                                    "<input type='button' id='codeBtn' value='Get code' ng-click='showCode = true' ng-disabled='!skinConfiguration.widgetId'/>" +
                                "</div>" +
                            "</div>";

                        el = $compile(tpl + div)(scope);
                        element.html("");
                        element.append(el);
                    }
                });
            }
        };
    });
