var app = angular.module('serverConfigApp', []);

app.controller(
    'serverConfigController',
    [
        "$scope", "$http",
        function($scope, $http) {

            $http({
                method : "GET",
                url : "http://localhost:8080/"
            }).then(function onSuccess(response) {
                $scope.serverConfig = response.data;
            }, function onError(response) {
                $scope.myWelcome = response.statusText;
            });
        }
    ]
);
