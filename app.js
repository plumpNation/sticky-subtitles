var app = angular.module('ui.sticky.subtitles', [])
    .controller('StickyMenu', function ($scope, MenuItemService, $timeout) {
        $scope.menu = MenuItemService;
    });
