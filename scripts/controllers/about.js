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
    .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = [$scope];

function AboutCtrl($scope) {
    console.log('Loading FirstTabCtrl');
    $scope.title = 'Second Tab';
}
