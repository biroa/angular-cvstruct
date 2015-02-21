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
                templateUrl: "main.html",
                controller: "ResumeCtrl as resume",
                resolve: {
                    store: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: "main",
                                files: ["main.js"]
                            })
                    }
                }
            })

            $stateProvider.state('/blog', {
                url: "/blog",
                templateUrl: "blog.html",
                controller: "BlogCtrl as blog",
                resolve: {
                    store: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "about",
                            files: ["about.js"]
                        })
                    }
                }
            })
        });

})();