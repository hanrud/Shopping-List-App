var app = angular.module("myShoppingList", []);
app.controller("listCtrl", function($scope) {
    $scope.products = ["Milk", "Eggs", "Bananas"];
});