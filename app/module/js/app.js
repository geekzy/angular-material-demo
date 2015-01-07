(function() {
"use strict";

    var app = angular.module('WebApp', ['ngMaterial']);
    app.config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('cyan')
            .accentColor('indigo')
            .backgroundColor('grey');
    }]);

    app.controller('MainController', ['$scope', '$mdBottomSheet', '$mdSidenav', '$log',
        function($scope, $mdBottomSheet, $mdSidenav, $log) {
        var allTabs = [];
        $scope.label = {
            showCtxMenu: 'Show Bottom Sheet',
            showMenu: 'Show Sidenav',
            userInfo: 'User Info',
            tabOne: 'Tab 1',
            tabTwo: 'Tab 2',
            tabThree: 'Tab 3'
        };

        $scope.showBottomSheet = function($event) {
            $mdBottomSheet.show({
                templateUrl: 'module/partials/bottom-sheet.html',
                targetEvent: $event
            });
        };

        $scope.showMenu = function() {
            $mdSidenav('left').toggle();
        };

        allTabs.push($scope.label.tabOne);
        allTabs.push($scope.label.tabTwo);
        allTabs.push($scope.label.tabThree);
        $scope.$watch('mainTab.selectedIndex', function(current, old) {
            if (!angular.isUndefined(current)) {
                $scope.activeTab = allTabs[current];
            }
        });
    }]);

})();
