angular.module('lazyTabset', [])
    .directive('lazyTabset', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            controller: function($scope) {
                $scope.templateUrl = '';
                var tabs = $scope.lazytab = [];
                console.log($scope);
                console.log($scope.lazytab);
                var controller = this;
                this.selectTab = function (tab) {
                    angular.forEach(tabs, function (tab) {
                        tab.selected = false;
                    });
                    tab.selected = true;
                };

                this.setTabTemplate = function (templateUrl) {
                    $scope.templateUrl = templateUrl;
                };

                this.addTab = function (tab) {
                    if (tabs.length == 0) {
                        controller.selectTab(tab);
                    }
                    tabs.push(tab);
                };
                console.log(tabs);
            },
            template:
            '<div class="row-fluid">' +
            '<div class="row-fluid">' +
            '<div class="nav nav-tabs" ng-href="" ng-transclude></div>' +
            '</div>' +
            '<div class="row-fluid">' +
            '<ng-include src="templateUrl"></ng-include>' +
            '</div>' +
            '</div>'
        };
    })
    .directive('lazyTab ', function () {
        return {
            restrict: 'E',
            replace: true,
            require: '^lazyTabset',
            scope: {
                title: '@',
                templateUrl: '@',
                href: '@'
            },
            link: function(scope, element, attrs, tabsetController) {
                console.log(tabsetController);
                tabsetController.addTab(scope);

                scope.select = function () {
                    tabsetController.selectTab(scope);
                };

                scope.$watch('selected', function () {
                    if (scope.selected) {
                        tabsetController.setTabTemplate(scope.templateUrl);
                    }
                });
            },
            template:
            '<li ng-class="{active: selected}">' +
            '<a href="#!{{href}}" ng-click="select()">{{ title }}</a>' +
            '</li>'
        };
    });