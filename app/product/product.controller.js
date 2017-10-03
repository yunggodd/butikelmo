    angular.module("product")
        .controller("productController", ["$scope", "$location", "productService",
    function ($scope, $location, productService) {
            productService.getProducts().then(function (response) {
                var products = response.data;
                $scope.products = products;
        });
    }
]);
