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
    .controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope) {
    console.log('Loading FirstTabCtrl');
    $scope.title = 'First Tab';
}
