angular.module("category")
        .controller("categoryController", ["$scope", "$location", "categoryService",
    function ($scope, $location, categoryService) {
        categoryService.getCategories().then(function (response) {
            var categories = response.data;
            $scope.categories =  categories;
        });
        $scope.searchTerm = "";
        }
    ]);