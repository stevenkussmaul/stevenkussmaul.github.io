"use strict";

angular.module("App")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/", {
                template: "<homepage></homepage>"
            })
            .when("/input", {
                template: "<input></input>"
            })
            .when("/output", {
                template: "<output></output>"
            })
}]);