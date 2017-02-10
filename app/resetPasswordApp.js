var app = angular.module('resetPasswordApp', ['tractdb.config']);

app.controller(
    'resetPasswordController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            // TODO: stylistically, this 'bag of parameters' seems bad
            $scope.viewModel = {};
            $scope.submitResetPasswordForm = function () {
                if ($scope.viewModel.password == $scope.viewModel.confirmPassword){
                    $http({
                        method: 'POST',
                        url: BASEURL_PYRAMID + '/accounts',
                        headers: {'Content-Type': 'application/json'},
                        data: $scope.viewModel // pass in data as JSON
                    }).then(
                        function (response) {
                            console.log('register success response: ' + response);
                            // TODO: on successful response, redirect user to dashboard
                        },
                        function (response) {
                            console.log('register error response: ' + response);
                            // TODO: on error response, popup error message and keep user on the same page
                            window.alert('Registration failed, please try again.');
                        }
                    );
                } else{
                    window.alert('Password you entered does not match with confirm password.')
                }
            };
        }
    ]
);

//todo: need to finish this file