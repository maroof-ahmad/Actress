var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.actress = {};
    //get the id to query the db and retrieve the correct actress
    var id = $routeParams.id;
    $http.get('/actress/' + id)
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.actress = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});
