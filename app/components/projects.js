"use strict";

const projects = {
    templateUrl: "/app/components/projects.html",
    bindings: [],
    controller: ["Service", function(Service){
        const vm = this;


        vm.projObj =
            [
                {
                     Name : "Alfreds Futterkiste",
                     Country : "Germany"
                 },{
                     Name : "Berglunds snabbköp",
                     Country : "Sweden"
                 },{
                     Name : "Centro comercial Moctezuma",
                     Country : "Mexico"
                 },{
                     Name : "Ernst Handel",
                     Country : "Austria"
                 }
             ];
        vm.myArray = ["item1","item2"];


    }]
}

angular.module("App")
    .component("projects",projects);