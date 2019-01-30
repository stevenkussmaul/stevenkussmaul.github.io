"use strict";

const homepage = {
    templateUrl: "/app/components/homepage.html",
    bindings: [],
    controller: ["Service", function(Service){
        const vm = this;

        vm.projObj = {
            key1 : "value1",
            key2 : "value2"
        };
        vm.myArray = ["item1","item2"];


    }]
}

angular.module("App")
    .component("homepage",homepage);