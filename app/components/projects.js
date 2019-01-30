"use strict";

const projects = {
    templateUrl: "/app/components/projects.html",
    bindings: [],
    controller: ["Service", function(Service){
        const vm = this;

    }]
}

angular.module("App")
    .component("projects",projects);