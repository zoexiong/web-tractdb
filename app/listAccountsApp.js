
var app = angular.module('listAccountsApp', ['tractdb.config']);

app.controller(
    'listAccountsController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            $http({
                method: 'GET',
                url: BASEURL_PYRAMID + '/accounts',
                headers: {'Content-Type': 'application/json'},
                data: $scope.viewModel
            }).then(function onSuccess(response) {
                $scope.lists = response.data;
                $scope.accounts=$scope.lists['accounts']
            }, function onError(response) {
                $scope.error = response.statusText;
            });
        }
    ]
);

app.controller(
    'registerController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            // TODO: stylistically, this 'bag of parameters' seems bad
            $scope.viewModel = {};
            $scope.submitRegisterForm = function () {
                $http({
                    method: 'POST',
                    url: BASEURL_PYRAMID + '/accounts',
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.viewModel // pass in data as JSON
                }).then(
                    function (response) {
                        console.log('register success response: ' + response);
                    },
                    function (response) {
                        console.log('register error response: ' + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert('Registration failed, please try again.');
                    }
                );
            };
        }
    ]
);


app.controller(
    'deleteAccountController',
    [
        '$scope','$http','BASEURL_PYRAMID',
        function ($scope,$http,BASEURL_PYRAMID){
            $scope.deleteSubmit=function(username){
                username=$scope.account;
                $http({
                    method:'DELETE',
                    url:BASEURL_PYRAMID+'/account/'+username,
                    headers:{'Content-Type': 'application/json'}
                }).then(
                    function(response){
                        console.log('delete success responce:'+response);
                    },
                function(response){
                    console.log('register error response:'+response);
                    window.alert('Delete failed, please try again.')
                }
                )
            }
        }
    ]
);


