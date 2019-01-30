"use strict";

const contact = {
    templateUrl: "/app/components/contact.html",
    bindings: [],
    controller: ["Service", function(Service){
        const vm = this;

    }]
}

angular.module("App")
    .component("contact",contact);