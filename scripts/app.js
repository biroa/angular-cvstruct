(function () {
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
            'oc.lazyLoad',
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ui.router',
            'ngSanitize',
            'ngTouch'
        ])

        .config(function($stateProvider) {
            $stateProvider.state('/', {
                url: "/resume",
                templateUrl: "pages/resume/resume.html",
                controller: "ResumeCtrl as resume",
                resolve: {
                    store: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: "resume",
                                files: ["pages/resume/resume.js"]
                            })
                    }
                }
            })
        });

})();