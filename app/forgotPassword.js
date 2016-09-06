var app = angular.module('forgotPasswordApp', ['tractdb.config']);

app.controller(
    'forgotPasswordController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            // TODO: stylistically, this 'bag of parameters' seems bad
            $scope.submitForm = function () {
                $http({
                    method: 'POST',
                  /*  need to add url for reset account
                    url: BASEURL_PYRAMID + '/accounts',*/
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.viewAccount
                }).then(
                    function (response) {
                        console.log('Email send!: ' + response);
                        // TODO: on successful response, redirect user to dashboard
                    },
                    function (response) {
                        console.log('Send forgot password email error response: ' + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert('Process failed, please try again.');
                    }
                );
            };
        }
    ]
);
