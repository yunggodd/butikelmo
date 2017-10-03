angular.module("app").
    controller("appController", ["$scope", function ($scope) {
}]);

angular.module("app").
    run(function ($rootScope) {
    $rootScope.isLoggedIn = false;
    $rootScope.internalCustomerId = "";
});