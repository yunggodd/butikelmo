angular.module("app")
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/product/product.template.html",
                    controller: "productController"
                })
                .when("/login", {
                    templateUrl: "app/login/login.template.html",
                    controller: "loginController"
                })
                .when("/cart", {
                    templateUrl: "app/cart/cart.template.html",
                    controller: "cartController"
                })
                .when("/createlogin", {
                    templateUrl: "app/login/login-create.login.html",
                    controller: "loginController"
                })
                .otherwise("/");
            $locationProvider.html5Mode(true);
        }]);
