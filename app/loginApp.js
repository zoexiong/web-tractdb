var app = angular.module('loginApp', ['tractdb.config']);

app.controller(
    'loginController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            // TODO: stylistically, this 'bag of parameters' seems bad
            $scope.viewModel = {};
            $scope.submitLoginForm = function () {
                $http({
                    method: 'POST',
                    url: BASEURL_PYRAMID + '/login',
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.viewModel // pass in data as JSON
                }).then(
                    function (response) {
                        console.log('login success response: ' + response);
                        // TODO: on successful response, redirect user to dashboard
                        window.location.href="/authenticated"
                    },
                    function (response) {
                        console.log('login error response: ' + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert('Invalid username or password.');
                    }
                );
            }
        }
    ]
);

app.controller(
    'logoutController',
    [
        '$scope','$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            $scope.logout = function () {
                $http({
                    method: 'POST',
                    url: BASEURL_PYRAMID + '/logout'
                }).then(
                    function (response) {
                        console.log('logout success response: ' + response);
                        // TODO: on successful response, redirect user to homepage
                        window.location.href="/"
                    },
                    function (response) {
                        console.log('logout error response: ' + response);
                    }
                );
            }
        }
    ]
);

