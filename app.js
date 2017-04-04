var app = angular.module("myShoppingList", []);
app.controller("listCtrl", function($scope) {
    $scope.products = ["Milk", "Eggs", "Bananas"];
    $scope.addProduct = function () {
        $scope.products.push($scope.addItem);
    }
});