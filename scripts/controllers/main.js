'use strict';

/**
 * @ngdoc function
 * @name publicHtmlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicHtmlApp
 */
angular.module('publicHtmlApp')

    .controller("MainCtrl", function ($injector, $ocLazyLoad, $state) {
        var home = this;
        //we can load it when controller is initialized
        $state.go("/");
    })