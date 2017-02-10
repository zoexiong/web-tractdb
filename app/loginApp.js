var app = angular.module('loginApp', ['tractdb.config','ngCookies']);

app.controller(
    'loginController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID', '$cookies',
        function ($scope, $http, BASEURL_PYRAMID, $cookies) {
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
                        //Todo: store the cookie in browser
                        //console.log("cookie:" + response.data['cookie_pyramid']);
                        //console.log("session:" + response.data['session_couch']);
                        // on successful response, redirect user to dashboard
                        window.location.href="/authenticated";
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
    'authController',
    [
        '$scope','$http', 'BASEURL_PYRAMID', '$cookies',
        function ($scope, $http, BASEURL_PYRAMID, $cookies) {
            //pyramid_cookie = $cookies.get('pyramid_cookie');
            //console.log("pyramid_cookie:" + pyramid_cookie);
            // $scope.headers = {};
            // $scope.headers.Cookie = pyramid_cookie;
            $http({
                method: 'GET',
                url: BASEURL_PYRAMID + '/authenticated'
                //headers:$scope.headers
            }).then(
                function (response) {
                    // Todo: add session and account to the status
                    $scope.authStatus = response.status + "," + response.statusText;
                },
                function (response) {
                    $scope.authStatus = response.status + "," + response.statusText;
                    //window.location.href="/login"
                }
            );
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



app.controller(
    'accountViewController',
    [
        '$scope','$http', 'BASEURL_PYRAMID',
        function ($scope, $http, BASEURL_PYRAMID) {
            $scope.accounts=[];
            $http({
                method: 'GET',
                url: BASEURL_PYRAMID + '/authenticated'
            }).then(
                function (response) {
                    $http({
                        method: 'GET',
                        url: BASEURL_PYRAMID + '/accounts'
                    }).then(
                        function(response){
                            $scope.lists = response.data;
                            $scope.accounts=$scope.lists['accounts'];
                            $scope.authStatus = response.status + "," + response.statusText;
                        }
                    );
                    //add data to display here
                },
                function (response) {
                    $scope.accounts=[];
                    window.location.href="/login";
                    $scope.authStatus = response.status + "," + response.statusText;
                }
            );
        }
    ]
);
