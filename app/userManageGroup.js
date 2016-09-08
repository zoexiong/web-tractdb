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
    $scope.requests = [{group_name:'CSE',data_type:'Sleep log, Weight',group_id:1},{group_name:'UW-Medicine',data_type:'Heart-rate',group_id:2}];
}]);

/*Todo:need to add back-end support for approve function*/
app.controller('manageRequest', ['$scope', function($scope) {
    $scope.approveRequest=function(ID){
        ID=$scope.request.group_id;
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
        ID=$scope.request.group_id;
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