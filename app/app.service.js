angular.module("app")
    .factory ("navbarService", [, function ($rootScope) {

        return {
            chooseNavbar: function () {
                if ($rootScope.isLoggedIn == true){
                    return '<a href="/cart">Cart</a>';
                }
                else {
                    return '<a href="/login">Login</a>'
                }
            }

        };
    }]);