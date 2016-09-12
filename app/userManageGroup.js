var app = angular.module("userManageGroup", ["tractdb.config"]);

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

app.controller('searchGroup', ['$scope', function($scope) {
/*    will delete this when have real data*/
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
            })

    };

}]);

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

app.controller('getRequest', ['$scope', function($scope) {
    $scope.requests = [{group_name:'CSE',data_type:['Sleep log', 'Weight'],group_id:1},{group_name:'UW-Medicine',data_type:['Heart-rate'],group_id:2}];
}]);

/*Todo:need to add back-end support for approve function*/
app.controller('manageRequest', ['$scope', function($scope) {
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

}]);


app.controller('getAuthorization', ['$scope', function($scope) {
    $scope.auths = [{group_name:'MSIM',data_type:['Sleep log', 'Weight'],group_id:1},{group_name:'UW-Medicine',data_type:['Sleep log'],group_id:2}];
}]);

/*Todo:need to add back-end support for this function*/
app.controller('manageAuthorization', ['$scope', function($scope) {
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
}]);

app.controller('logoutController',['$scope','$window', function($scope,$window){
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
        /*   var date=new Date();
         date.setTime(date.getTime()-10000);*/
        /*   Todo: it create another cookie instead of delete the previous one, need to debug,
         Also, I need to delete the logoutController in userManageGroup.js since it is temporarily used for testing*/

        /*   document.cookie='authed=false'*/
            $window.location.href = '/login';
        console.log(document.cookie);
    }
}]);