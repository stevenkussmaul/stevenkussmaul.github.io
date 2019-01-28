"use strict";

const homepage = {
    template: `
    
    <section class="cvr-image-container">
        <img class="cvr-image" src="/app/image.jpg">
    </section>

    <section class="nav-bar">
        <a href="">home</a>
        <a href="">about</a>

    </section>

    <section class="content-list" ng-repeat="item in $ctrl.myArray track by $index">
        text here   {{item}}
        <section class="content-image-container">
            test text {{x}}
        </section>
        <section class="content-text-container">
            test 2
        </section>
    </section>


        <section><p>{{4+4}}</p></section>

        <button>click here</button>
    
    `,
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