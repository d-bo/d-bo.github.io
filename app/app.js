"use strict";

/**
 * CV application
 */
var dApp = angular.module('dApp', [
    'ngRoute',
    'dControllers'
]);

dApp.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'app/templates/resume.html?_cache='+new Date(),
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);