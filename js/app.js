
'use strict';

var myApp = angular.module('myApp', ['ngRoute','ngStorage']);

//myApp.config(function($routeProvider) {

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.

      when('/', {
        controller: 'MainController',
        templateUrl: 'views/main.html'
      }).
      when('/login', {
        controller: 'MainController',
        templateUrl: 'views/login.html'
      }).
      when('/server/:userId', {
        controller: 'MainController',
        templateUrl: 'views/server.html'
      }).
      when('/help', {
        templateUrl: 'views/help.html'
      });

});

myApp.config(['$httpProvider', function($httpProvider) {
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('admin' + ':' + 'abc12345');
}]);

