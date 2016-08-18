var app = angular.module('loginApp', ['tractdb.config']);

app.controller(
    'loginController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function($scope, $http, BASEURL_PYRAMID) {
            $scope.formData = {};
        }
    ]
);
