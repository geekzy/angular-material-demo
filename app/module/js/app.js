(function() {

    var app = angular.module('WebApp', ['ngMaterial']);
    app.config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('amber')
            .accentColor('brown');
    }]);

    app.controller('MainController', ['$scope', '$mdBottomSheet', '$mdSidenav', function($scope, $mdBottomSheet, $mdSidenav) {
        $scope.title = 'Show Bottom Sheet';
        $scope.label = {
            showMenu: "Show Sidenav",
            deviceInfo: "Device Info",
            chats: "Chats",
            contacts: "Contacts",
            settings: "Settings"
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
    }]);

})();
