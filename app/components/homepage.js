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

<section class="content-list" ng-repeat="(x, y) in projectsObj">
    <section class="content-image-container">
        {{x}}
    </section>
    <section class="content-text-container">
        {{y}}
    </section>

</section>


    <section><p>{{4+4}}</p></section>

    <button>click here</button>
    
    `,
    bindings: [],
    controller: [function(){
        const vm = this;

    }]
}

angular.module("App")
    .component("homepage",homepage);