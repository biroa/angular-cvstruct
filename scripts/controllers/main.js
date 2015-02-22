'use strict';

/**
 * @ngdoc function
 * @name publicHtmlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicHtmlApp
 */
angular.module('publicHtmlApp')

    .config(function($stateProvider) {
        $stateProvider.state('/', {
            url: "/home",
            templateUrl: "home.html",
            controller: "HomeCtrl as home",
            resolve: {
                store: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: "home",
                            files: ["home.js"]
                        })
                }
            }
        })
    })

    .controller('MainCtrl', MainCtrl);
    MainCtrl.$inject = ['$injector', '$ocLazyLoad', '$state'];

    function MainCtrl($injector, $ocLazyLoad, $state){
        var main = this;
        console.log(1);
    }