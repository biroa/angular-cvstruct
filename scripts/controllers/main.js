'use strict';

/**
 * @ngdoc function
 * @name publicHtmlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicHtmlApp
 */
    angular
        .module('publicHtmlApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = [$scope];

    function MainCtrl($scope) {
        console.log('Loading FirstTabCtrl');
        $scope.title = 'First Tab';
    }
