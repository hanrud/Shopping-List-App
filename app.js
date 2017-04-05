var app = angular.module("myShoppingList", []);
app.controller("listCtrl", function ($scope) {
    $scope.products = [];
    $scope.addProduct = function () {
        $scope.errortext = '';
        if (!$scope.addItem) {
            return;
        }
        if ($scope.products.indexOf($scope.addItem) === -1) {
            $scope.products.push($scope.addItem);
            $scope.addItem = '';
        } else {
            $scope.errortext = "This product is already on your list.";
        }

    };
    $scope.pressed = function ($event, item) {
        if ($event.which === 13) {
            $scope.addProduct(item);
        }
    };
    $scope.removeProduct = function (item) {
        $scope.errortext = "";
        $scope.products.splice(item, 1);
    }
});