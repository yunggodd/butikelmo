
angular.module("login")
    .factory("loginService", ["$http", function ($http) {
        return {
            userLogIn: function (username, password) {
                var login = {
                    email: username,
                    password: password
                };
                return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login);
            },
            createLogin : function (user) {
                return $http.post("http://nackbutik.azurewebsites.net/api/customer/", user)
            }
        };
    }]);