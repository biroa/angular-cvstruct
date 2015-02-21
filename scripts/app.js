'use strict';

/**
 * @ngdoc overview
 * @name publicHtmlApp
 * @description
 * # publicHtmlApp
 *
 * Main module of the application.
 */
angular
  .module('publicHtmlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '#!resume'
        })
      .when('/contact', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '#!resume'
      });
  });
