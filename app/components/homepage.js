"use strict";

const homepage = {
    templateUrl: "/app/components/homepage.html",
    bindings: [],
    controller: ["Service", function(Service){
        const vm = this;


    }]
}

angular.module("App")
    .component("homepage",homepage);