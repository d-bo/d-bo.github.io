"use strict";

/**
 * CV controller module
 *
 * @module app/controller
 * @constructor
 */
var dControllers = angular.module('dControllers', [])
.factory('i18n', function($http) {
    return function(lang) {
        return $http.get("i18n/"+lang+".json");
    };
})
.controller('homeController', ['$scope', '$http', 'i18n',
    function($scope, $http, i18n) {
        $scope.i18n_cache = {};
        $scope.setLang = function(lang) {
            // translation cached ?
            $scope.currentLanguage = lang;
            if (lang in $scope.i18n_cache) {
                $scope.content = $scope.i18n_cache[lang];
            } else {
                i18n(lang).success(function(response) {
                    $scope.i18n_cache[lang] = response;
                    $scope.content = response;
                });
            }
        };
        $scope.setLang('en'); // default translation pack
    }
])
.directive('myPhone', function() {
    return {
        template: '{{content.phone}}'
    };
})
.directive('myEmail', function() {
    return {
        template: '{{content.email}}'
    };
})
.directive('currentYear', function() {
    return {
        template: '{{content.year}} &#169;'
    };
});