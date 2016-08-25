var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.actresses = [];
    //Retrieve all the actresses to show the gallery
    $http.get('/actress')
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.actresses = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});
