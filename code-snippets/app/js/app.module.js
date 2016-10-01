angular.module("productApp", [
    "ui.router",
    //"ui.router.state.events",

    "ngResource",
    
    "auth.module",
    "cart.module",

    "app.config",
    "app.controllers",
    
    "about.module",
    "home.module" ,
    "product.module",
    "brand.module"
])
.constant("DEBUG", true)
.run(function($rootScope){
    console.log("title run");
    $rootScope.appTitle = "Product App";
    $rootScope.title = "Welcome to Angular 1.5";
})
.run(function(DEBUG){
    console.log(" run 2 Is Debug", DEBUG);   
})
.run(function($rootScope){
    //$on("nameoftheevent, listerfunction)
    $rootScope.$on("pageTitleChanged", function($event, title){
        $rootScope.pageTitle = title;
    })
})
