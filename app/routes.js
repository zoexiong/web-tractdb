var app = angular.module('routeApp', ['ngRoute','tractdb.config']);
app.config(function($routeProvider){
    $routeProvider
        .when('/person/:username',{
            controller:'personController',
            templateUrl:'views/person.html'
        })
        .when('/admin/:username',{
            controller:'adminController',
            templateUrl:'views/admin.html'
        })
        .when('/login',{
            controller:'loginController',
            templateUrl:'views/login.html'
        })
        .when('/',{
            controller:'homeController',
            templateUrl:'views/home.html'
        })
        /*        .when('/admin/:username',{
         controller:'adminController',
         templateUrl:'views/admin.md'
         })*/
        .otherwise({
            redirectTo:'/'
        });
});


app.controller('homeController', ['$scope', '$http', 'BASEURL_PYRAMID', function ($scope, $http, BASEURL_PYRAMID) {
        $http({
            method: 'GET',
            url: BASEURL_PYRAMID,
            headers: {'Content-Type': 'application/json'},
            data: ''
        }).then(function onSuccess(response) {
            $scope.serverConfig = response.data;
        }, function onError(response) {
            $scope.myWelcome = response.statusText;
        });
    }
    ]
);

app.controller(
    'adminController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            /*        get accounts info*/
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
            /*            register*/
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
            /*            delete account*/
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



app.controller(
    'loginController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID','$window',
        function ($scope, $http, BASEURL_PYRAMID,$window) {
            $scope.submitLoginForm = function () {
                postParams = {};
                postParams.account = $scope.viewAccount;
                postParams.password = $scope.viewPassword;
                // construct the dictionary
                $http({
                    method: 'POST',
                    url: BASEURL_PYRAMID + '/login',
                    headers: {'Content-Type': 'application/json'},
                    data: postParams // pass in data as JSON
                }).then(
                    function (response) {
                        console.log('login success response: ' + response);
                        document.cookie='username='+$scope.viewAccount+';path=/;';
                        console.log(document.cookie);
                        /* Todo: if user type is person, redirect to /person, if user type is admin, redirect to /admin*/
                        /*                        $window.location.href = '/admin/'+postParams.account;*/
                        $window.location.href = '#/person/'+postParams.account;

                    },
                    function (response) {
                        console.log('login error response: ' + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert('Invalid username or password.');
                    }
                );
            };

        }
    ]
);



app.controller(
    'personController',
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




