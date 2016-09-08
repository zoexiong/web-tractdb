var app = angular.module('forgotPasswordApp', ['tractdb.config']);

app.controller(
    'forgotPasswordController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            $scope.submitForm = function () {
                $http({
                    method: 'POST',
                  /*  need to add url for reset account
                    url: BASEURL_PYRAMID + '/accounts',*/
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.viewAccount
                }).then(
                    function (response) {
                        console.log('An e-mail has been send to the above address: ' + response);
                        // TODO: on successful response, redirect user to dashboard
                        window.alert('An e-mail has been send to the above address');
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


app.controller(
    'resetPasswordController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            $scope.submitResetForm = function () {
             postParams = {};
                postParams.account = $scope.viewAccount;
                postParams.password = $scope.viewPassword;
                $http({
                    method: 'POST',
                  /*  need to add url for reset account
                    url: BASEURL_PYRAMID + '/accounts',*/
                    headers: {'Content-Type': 'application/json'},
                    data: postParams
                }).then(
                    function (response) {
                        console.log('Reset successful: ' + response);
                        // TODO: on successful response, redirect user to dashboard
                    },
                    function (response) {
                        console.log('Reset password error response: ' + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert('Reset password failed, please try again.');
                    }
                );
            };
        }
    ]
);
