"use strict";

angular.module("App")
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                template: "<homepage></homepage>"
            })
            .when("/homepage", {
                template: "<homepage></homepage>"
            })
            .when("/projects", {
                template: "<projects></projects>"
            })
            .when("/contact", {
                template: "<contact></contact>"
            })
            .otherwise("/homepage", {
                template: "<homepage></homepage>"
            })
}]);