//Main file
var app = angular.module('superActressApp', ['addActressCtrl', 'galleryCtrl','detailCtrl', 'ngRoute'])
    .config(function($routeProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addActress', {
            templateUrl: 'partials/addActress.html',
            controller: 'addActressController'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        //Redirect to addActress in all the other cases.
        .otherwise({redirectTo:'/addActress'});
        //Add the API key to use filestack service
        filepicker.setKey("your_API_KEY");
});
