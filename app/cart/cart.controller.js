angular.module("cart").
    controller("cartController", ["$scope", "$rootScope", "$location", "cartService",
    function ($scope, $rootScope, $location, cartService) {

        $scope.totalSum = cartService.totalSumCalc();

        $scope.checkout = function () {
            $scope.orderText = "";
            cartService.checkout($rootScope.internalcustomerId).then(function success() {
                if(cartService.returnCart().length == 0){
                    $scope.orderText = "There are no products in the cart"
                }
                else {
                    $scope.orderText = "Order registered";
                    cartService.emptyCart();
                    $scope.totalSum = 0;
                }

            }, function error() {
                $scope.orderText = "Error: Try again"
                }
            )
        };


        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            console.log(cartService.returnCart())
        };

        $scope.cart = cartService.returnCart();

        $scope.emptyCart = function () {
            cartService.emptyCart();
            $scope.totalSum = 0;
            $scope.orderText = "You emptied the cart";
        };
    }]);