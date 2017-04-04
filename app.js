var app = angular.module("myShoppingList", []);
app.controller("listCtrl", function($scope) {
    $scope.products = ["Milk", "Eggs", "Bananas"];
    $scope.addProduct = function () {
        $scope.errortext = '';
        if (!$scope.addItem) {return;}
        if ($scope.products.indexOf($scope.addItem) == -1) {
            $scope.products.push($scope.addItem);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }

    }
    $scope.removeProduct = function (item) {
        $scope.errortext = "";
        $scope.products.splice(item, 1);
    }
});