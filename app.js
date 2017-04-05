"use strict";
var app = angular.module("myShoppingList", []);
app.controller("listCtrl", ['$scope', function ($scope) {
    $scope.products = [];
    $scope.counts = [];
    $scope.addProduct = function () {
        $scope.errortext = '';
        if (!$scope.addItem) {
            $scope.errortext = "What would you like to add?";
        } else if ($scope.products.indexOf($scope.addItem) !== -1) {
            $scope.errortext = $scope.addItem + " is already on your list.";
        } else if (!$scope.addCount | $scope.addCount == 0) {
            $scope.errortext = "You sure you want 0 of " + $scope.addItem + " ?";
        } else {
            $scope.products.push($scope.addItem);
            $scope.counts.push($scope.addCount);
            $scope.addItem = '';
            $scope.addCount = '';
        }
    };
    $scope.pressed = function ($event, item) {
        if ($event.which === 13 && $scope.addItem && $scope.addCount) {
            $scope.addProduct(item);
        }
    };
    $scope.removeProduct = function (item) {
        $scope.errortext = "";
        $scope.products.splice(item, 1);
    }
}]);