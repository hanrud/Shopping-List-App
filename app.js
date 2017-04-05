var app = angular.module("myShoppingList", []);
app.controller("listCtrl", function($scope) {
    $scope.products = ["Milk", "Eggs", "Bananas"];
    $scope.addProduct = function () {
        $scope.errortext = '';
        if (!$scope.addItem) {return;}
        if ($scope.products.indexOf($scope.addItem) === -1) {
            $scope.products.push($scope.addItem);
            $scope.addItem = '';
        } else {
            $scope.errortext = "This product is already on your list.";
        }

    };
    $scope.removeProduct = function (item) {
        $scope.errortext = "";
        $scope.products.splice(item, 1);
    }
});