"use strict";

const projects = {
    templateUrl: "/app/components/projects.html",
    bindings: [],
    controller: ["Service", function(Service){
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
                    description: "Exercise Calculator Application"  
                 }
             ];
        vm.myArray = ["item1","item2"];


    }]
}

angular.module("App")
    .component("projects",projects);