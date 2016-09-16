var module_tractdbConfig = angular.module('tractdb.config', []);

module_tractdbConfig.constant(
    'BASEURL_PYRAMID',
/*    '{{ site.tractdb.baseurl_pyramid }}'*/
/*Todo: don't know what's wrong, but this variable is not able to get the url from config file*/
'http://192.168.99.100:8080'
);

module_tractdbConfig.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);
