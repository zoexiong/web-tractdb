var app = angular.module("app", ["checklist-model", "tractdb.config"]);

// links: http://plnkr.co/edit/3YNLsyoG4PIBW6Kj7dRK?p=preview
// links: http://stackoverflow.com/questions/14514461/how-can-angularjs-bind-to-list-of-checkbox-values

app.factory('getData', ['$http', 'BASEURL_PYRAMID', function($http, BASEURL_PYRAMID) {
  return $http.get(BASEURL_PYRAMID + '/accounts')
            .success(function(response) {
              return response.data;
            })
            .error(function(response) {
              return response.err;
            });
}]);


app.controller('Ctrl1', ['$scope', 'getData', function($scope, getData) {
  getData.success(function(data) {
    $scope.roles = data['accounts'];
  });
    $scope.user = {
    roles: []
  };
    $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length);
    $scope.user.roles.push($scope.roles[0]);
  };
}]);


/*sample code for factory ------------------------------------*/

/*http://stackoverflow.com/questions/32484141/angularjs-retrieve-data-from-backend-using-factory-service*/
/*.factory("utentiService", function($http) {
    return {
        getData: function () {
            return $http.get("backListaUtenti.php").then(function (response) {
               return response.data;
            });
        }
    };
});

angular.module("myApp")
.controller("utenteCtrl", function($scope, $routeParams, utentiService, filterFilter) {
    var userId = $routeParams.userId;
    utentiService.getData().then(function(data) {
        $scope.utente = filterFilter(data, { id: userId })[0];
    });
});

angular.module("myApp")
.controller("listaUtentiCtrl", function($scope, utentiService) {
    utentiService.getData().then(function (data) {
        $scope.utenti = data;
    });
});*/

/*end of sample code for factory ------------------------------------*/






