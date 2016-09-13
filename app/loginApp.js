var app = angular.module('loginApp', ['tractdb.config']);

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
                        $window.location.href = '/person';
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


/*todo: use angular routes for login and logout process and add code to check condition before load /person page*/

app.controller('logoutController',['$scope','$window','BASEURL_PYRAMID','$http', function($scope,$window,$http,BASEURL_PYRAMID){
    function getCookie()
    {
        Account='username';
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(Account + "=");
            if (c_start!=-1)
            {
                c_start=c_start + Account.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return (document.cookie.substring(c_start,c_end));
            }
        }
        return ""
    }
    $scope.accountName=getCookie();
    $scope.logout=function(){
        /*        Todo: this doesn't work and it returns $http is not a function, need to fix this bug*/
        /*$http({
         method: 'POST',
         url: BASEURL_PYRAMID + '/logout'
         }).then(
         function (response) {
         console.log('logout success response: ' + response);
         document.cookie='';
         $window.location.href = '/login';
         },
         function (response) {
         console.log('logout error response: ' + response);
         // TODO: on error response, popup error message and keep user on the same page
         window.alert('please try again');
         }
         );*/
        var exdate=new Date();
        exdate.setDate(exdate.getDate()-10000);
        document.cookie="username="+Account+';path=/;'+"expires="+exdate.toGMTString();
        /*delete the test cookie added by login controller*/
        console.log(document.cookie);
        /*        Todo:delete this line below when $http request works.*/
        $window.location.href = '/login';
    }
}]);

/*Todo:delete the logout controller from userManageGroup.js and try to use view or directive to apply this function*/


/*  Sample code for setting cookie and get cookie,      from w3school.com*/
/* function getCookie(viewAccount)
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
 /!*                    ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())*!/
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
 }*/

