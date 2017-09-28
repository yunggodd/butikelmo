    angular.module("product").
        controller("productController", ["$scope","productService",
    function ($scope, productService) {
        productService.getProducts().then(function (response) {
            var products = response.data;
            $scope.products = products;
        });

    }

]);
