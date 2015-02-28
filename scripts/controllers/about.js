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
    .controller('AboutController', AboutController);

AboutController.$inject = ['$scope'];

function AboutController($scope) {
    console.log('Loading FirstTabCtrl');
    $scope.title = 'Second Tab';
}
