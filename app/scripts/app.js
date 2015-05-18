'use strict';

angular.module('sociallistMvp1App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'loom.api'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
