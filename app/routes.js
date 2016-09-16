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
            $scope.deleteSubmit=function(index){
                delete_username=$scope.accounts[index];
                /*$http({
                    method:'DELETE',
                    url:BASEURL_PYRAMID+'/account/'+delete_username,
                    headers:{'Content-Type': 'application/json'}
                }).then(
                    function(response){
                        console.log('delete success responce:'+response);
                        $window.location.href = '#/admin/'+accountName;
                    },
                    function(response){
                        console.log('register error response:'+response);
                        window.alert('Delete failed, please try again.')
                    }
                )*/
                console.log(delete_username+index)
            };
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
                document.cookie="username="+$scope.accountName+';path=/;'+"expires="+exdate.toGMTString();
                /*delete the test cookie added by login controller*/
                console.log(document.cookie);
                /*        Todo:delete this line below when $http request works.*/
                $window.location.href = '#/login';
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


// links: http://plnkr.co/edit/3YNLsyoG4PIBW6Kj7dRK?p=preview
// links: http://stackoverflow.com/questions/14514461/how-can-angularjs-bind-to-list-of-checkbox-values

/*Todo: need to use getData controller to fetch data*/
/*app.factory('getData', ['$http', 'BASEURL_PYRAMID', function($http, BASEURL_PYRAMID) {
 return $http.get(BASEURL_PYRAMID + '/groups')
 /!*need to add url to get the list of groups*!/
 .success(function(response) {
 return response.data;
 })
 .error(function(response) {
 return response.err;
 });
 }]);*/

/*Todo: need to add joinGroup function*/
/*app.controller('searchGroup', ['$scope', 'getData', function($scope, getData) {
 use this when data is available on the server
 getData.success(function(data) {
 $scope.groups = data;
 });*/

app.controller('personController', ['$scope','$window','BASEURL_PYRAMID','$http', function($scope,$window,$http,BASEURL_PYRAMID){
    /* Todo:   will delete this when have real data*/
    /*    get group list and send request to join group*/
    $scope.groups = [{name:'CSE',id:1},{name:'UW-Medicine',id:2},{name:'HCID',id:3},{name:'HCDE',id:4},{name:'MSIM',id:5}];
    $scope.checkedID=[];
    /*    $scope.checkAll = function() {
     $scope.checkedGroups = angular.copy($scope.groups);
     };
     $scope.uncheckAll = function() {
     $scope.checkedGroups = [];
     };*/
    /*Todo:add function to support checkboxes*/
    $scope.submitRequest=function(){
        groupID=$scope.checkedID;
        $http({
            method: 'POST',
            /*  need to add url for join group
             url: BASEURL_PYRAMID + '/groups',*/
            headers: {'Content-Type': 'application/json'},
            data: groupID
        }).then(
            function (response) {
                console.log('success ' + response);
                window.alert('You\'ve joined that group');
            },
            function (response) {
                console.log('error' + response);
                // TODO: on error response, popup error message and keep user on the same page
                window.alert('Process failed, please try again.');
            });
    };
    /*        get request from group admin*/
    /*Todo: need to use getRequest controller to fetch requests*/
    /*app.factory('getRequest', ['$http', 'BASEURL_PYRAMID', function($http, BASEURL_PYRAMID) {
     return $http.get(BASEURL_PYRAMID + '/groups/requests')
     /!*need to add url to get the list of requests*!/
     .success(function(response) {
     return response.data;
     })
     .error(function(response) {
     return response.err;
     });
     }]);*/
    $scope.requests = [{group_name:'CSE',data_type:['Sleep log', 'Weight'],group_id:1},{group_name:'UW-Medicine',data_type:['Heart-rate'],group_id:2}];
    /*        approve request*/
    $scope.approveRequest=function(ID){
        ID=$scope.sender.group_id;
        $http({
            method: 'POST',
            /*  need to add url for approve request
             url: BASEURL_PYRAMID + '/groups/approve',*/
            headers: {'Content-Type': 'application/json'},
            data: ID
        }).then(
            function (response) {
                console.log('success ' + response);
                window.alert('You\'ve joined that group');
            },
            function (response) {
                console.log('error' + response);
                // TODO: on error response, popup error message and keep user on the same page
                window.alert('Process failed, please try again.');
            })

    };
    /*Todo:need to add back-end support for approve function*/
    /*        decline request from group admin*/
    $scope.declineRequest=function(ID){
        ID=$scope.sender.group_id;
        $http({
            method: 'POST',
            /*  need to add url for decline request
             url: BASEURL_PYRAMID + '/groups/decline',*/
            headers: {'Content-Type': 'application/json'},
            data: ID
        }).then(
            function (response) {
                console.log('success ' + response);
                window.alert('You\'ve declined that request');
            },
            function (response) {
                console.log('error' + response);
                // TODO: on error response, popup error message and keep user on the same page
                window.alert('Process failed, please try again.');
            })
    };
    /*        get authorization information*/
    $scope.auths = [{group_name:'MSIM',data_type:['Sleep log', 'Weight'],group_id:1},{group_name:'UW-Medicine',data_type:['Sleep log'],group_id:2}];
    /*Todo:need to add back-end support for this function*/
    /*        manage authorization and data access*/

    $scope.cancelAuth=function(ID){
        ID=$scope.auth.group_id;
        $http({
            method: 'POST',
            /*  need to add url to cancel auth
             url: BASEURL_PYRAMID + '/groups/auth',*/
            headers: {'Content-Type': 'application/json'},
            data: ID
        }).then(
            function (response) {
                console.log('success ' + response);
                window.alert('You\'ve cancel that authorization');
            },
            function (response) {
                console.log('error' + response);
                // TODO: on error response, popup error message and keep user on the same page
                window.alert('Process failed, please try again.');
            })
    };
    /*        logout function */
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
        document.cookie="username="+$scope.accountName+';path=/;'+"expires="+exdate.toGMTString();
        /*delete the test cookie added by login controller*/
        console.log(document.cookie);
        /*        Todo:delete this line below when $http request works.*/
        $window.location.href = '#/login';
    }
}]);







