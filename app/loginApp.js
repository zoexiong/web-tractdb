var app = angular.module('loginApp', ['tractdb.config']);

app.controller(
    'loginController',
    [
        '$scope', '$http', 'BASEURL_PYRAMID','$window',
        function ($scope, $http, BASEURL_PYRAMID,$window) {
            columnName='username';
            function getCookie(viewAccount)
            {
                if (document.cookie.length>0)
                {
                    c_start=document.cookie.indexOf(viewAccount + "=");
                    if (c_start!=-1)
                    {
                        c_start=c_start + viewAccount.length+1;
                        c_end=document.cookie.indexOf(";",c_start);
                        if (c_end==-1) c_end=document.cookie.length;
                        return unescape(document.cookie.substring(c_start,c_end))
                    }
                }
                return ""
            }
            function setCookie(columnName,username,expiredays)
            {
                var exdate=new Date();
                exdate.setDate(exdate.getDate()+expiredays);
                document.cookie=columnName+"="+username+';path=/';
/*                    ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())*/
            }

            function checkCookie()
            {
                username=getCookie(viewAccount);
                if (username!=null && username!="")
                {alert('Welcome again '+username+'!')}
                else
                {
                    // username=prompt('Please enter your name:',"");
                    username=viewAccount;
                    if (username!=null && username!="")
                    {
                        setCookie(columnName,username,365)
                    }
                }
            }
            // TODO: stylistically, this 'bag of parameters' seems bad
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
                        document.cookie='username='+$scope.viewAccount+';path=/';
/*                        document.cookie='authed=true';*/
                        console.log(document.cookie);
                        $window.location.href = '/person';
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

app.controller('logoutController',['$scope','$window', function($scope,$window){
$scope.logout=function(){
 /*   var date=new Date();
    date.setTime(date.getTime()-10000);*/
/*   Todo: it create another cookie instead of delete the previous one, need to debug,
 Also, I need to delete the logoutController in userManageGroup.js since it is temporarily used for testing*/

 /*   document.cookie='authed=false'*/
    $window.location.href = '/login';
    console.log(document.cookie);
}
}]);


/*(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$window', 'loginSrv', 'notify'];

    function LoginCtrl($window, loginSrv, notify) {
        /!* jshint validthis:true *!/
        var vm = this;
        vm.validateUser = function () {
            loginSrv.validateLogin(vm.username, vm.password).then(function (data) {
                if (data.isValidUser) {
                    $window.location.href = '/index.html';
                }
                else
                    alert('Login incorrect');
            });
        }
    }
})();*/

/*
http://stackoverflow.com/questions/27941876/how-to-redirect-to-another-page-using-angular-js*/
