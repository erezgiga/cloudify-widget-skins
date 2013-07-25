'use strict';

angular.module('cloudifyWidgetSkinsApp')
    .directive('getTemplate', function ($compile) {
        return {
            template: '<div></div>',
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                var el;
                var conf;

                scope.$watch('fieldNames', function() {
                    if (scope.fieldNames != undefined) {
                        scope.fields = JSON.parse(scope.fieldNames);
                        addConfiguration();
                    }
                }, true);

                attrs.$observe('template', function (tpl) {
                    if (angular.isDefined(tpl) && tpl != "") {
                        el = $compile(tpl)(scope);
                        element.html("");
                        element.append(el);
                    }
                });

                function addConfiguration() {
                    var fields = scope.fields.fields;

                    var div = document.createElement("div");
                    div.setAttribute('id', 'configuration');

                    for (var i = 0; i < fields.length; i++) {
                        var fieldDiv = document.createElement("div");
                        fieldDiv.className = 'detailBox';
                        fieldDiv.innerText = fields[i].name;

                        var fieldInput = document.createElement("input");
                        fieldInput.setAttribute('type', fields[i].type);
                        fieldInput.setAttribute('ng-model', fields[i].name);

                        fieldDiv.appendChild(fieldInput);
                        div.appendChild(fieldDiv);
                    }

                    var buttonsDiv = document.createElement("div");

                    var buttonInput = document.createElement("input");
                    buttonInput.setAttribute('id', 'codeBtnl');
                    buttonInput.setAttribute('value', 'Get code');
                    buttonInput.setAttribute('ng-click', 'showCode=true');
                    buttonInput.setAttribute('ng-disabled', '!widgetId');

                    div.appendChild(buttonsDiv);

                    conf = $compile(div)(scope);

                    if ($('#configuration') != undefined) {
                        $('#configuration').remove();
                    }
                    element.append(div);
                }
            }
        };
    });
