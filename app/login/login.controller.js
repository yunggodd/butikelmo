
angular.module("login").
    controller("loginController", ["$scope","$rootScope", "$location", "loginService",
    function ($scope, $rootScope, $location, loginService) {

        $scope.logOut = function () {
            console.log($rootScope.isLoggedIn);
            $rootScope.isLoggedIn = false;
            console.log($rootScope.isLoggedIn);

            $location.path("/");

        };

        $scope.doLogin = function (username, password) {
            console.log($rootScope.isLoggedIn);
            loginService.userLogIn(username, password).then(function (response) {
                $rootScope.isLoggedIn = true;
                $rootScope.internalcustomerId = response.data.customerId;
                console.log($rootScope.internalcustomerId);
                $location.path("/");
                console.log($rootScope.isLoggedIn)
                
            }, function failedLogin() {
                $scope.loginErrorText = "Failed to log in."

                }
            )
        };

        $scope.customer = {};

        $scope.createCustomer = function() {
            var newCustomer = {

                firstName: $scope.customer.firstName,
                lastName: $scope.customer.surName,
                email: $scope.customer.email,
                password: $scope.customer.password,
                phone: $scope.customer.phone,
                address: $scope.customer.address,
                postalCode: $scope.customer.postalCode,
                city: $scope.customer.city


            };

            loginService.createLogin(newCustomer).then(function successCreate() {

                $location.path("/login");

            },function failCreate() {
                $scope.createErrorText = "Failed to create customer."

                }
            );
        }

    }]);
