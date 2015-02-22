'use strict';

/**
 * @ngdoc function
 * @name publicHtmlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicHtmlApp
 */
angular.module('publicHtmlApp')
    
    .controller('MainCtrl', MainCtrl);
    MainCtrl.$inject = ['$injector', '$ocLazyLoad', '$state'];

    function MainCtrl($injector, $ocLazyLoad, $state){
        var main = this;
        $state.go("/");
    }