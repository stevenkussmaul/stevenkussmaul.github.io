"use strict";

const projects = {
    templateUrl: "/app/components/projects.html",
    bindings: [],
    controller: ["Service","$location", function(Service,$location){
        const vm = this;


        vm.projObj =
            [
                {
                    name : "Event Scout",
                    img:"/app/images/projects/thumbnail-event-scout.png",
                    url:"https://stevenkussmaul.github.io/Event-Scout-event-website/",
                    github: "https://github.com/stevenkussmaul/Event-Scout-event-website",
                    description: "Find events from search criteria using Ticketmaster API"                    
                 },{
                    name : "Bioshock Shopping Cart",
                    img:"/app/images/projects/thumbnail-bioshock-shopping-cart.png",
                    url:"https://stevenkussmaul.github.io/Plasmid-Shopping-Cart/",
                    github: "https://github.com/stevenkussmaul/Plasmid-Shopping-Cart",
                    description: "Shopping cart application with theme from the Bioshock game"  
                 },{
                    name : "Burger Burner",
                    img:"/app/images/projects/thumbnail-burger-burner.png",
                    url:"https://stevenkussmaul.github.io/Burger-Burner-Excercise-App/",
                    github: "https://github.com/stevenkussmaul/Burger-Burner-Excercise-App",
                    description: "Fun app that calculates how far away you have to park to burn off the calories you eat at McDonalds."  
                 }
             ];

        let address;

        vm.goRepo = (address) => {
            console.log(address);
            $location.url(address);
        }
        vm.goPages = (address) => {
            console.log(address);
            $location.url(address);
        }

    }]
}

angular.module("App")
    .component("projects",projects);