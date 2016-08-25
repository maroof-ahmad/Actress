var addCtrl = angular.module('addActressCtrl', []);
addCtrl.controller('addActressController', function($scope, $http){
  $scope.actress = {};
  $scope.ratings = [1,2,3,4,5,6,7,8,9,10];
  $scope.actress.rating = $scope.ratings[9];
    //Send the newly created actress to the server to store in the db
    $scope.createActress = function(){
        $http.post('/actress', $scope.actress)
            .success(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new actresses
                $scope.actress = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    //Single file upload, you can take a look at the options
    $scope.upload = function(){
      console.log($scope.actress.rating);
        filepicker.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.actress.picture = Blob;
                $scope.$apply();
            },
            function(FPError){
            //  console.log(FPError.toString());
  }
        );
    };
    //Multiple files upload set to 3 as max number
    $scope.uploadMultiple = function(){
        filepicker.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
      function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.actress.morePictures = Blob;
                $scope.$apply();
            }
        );
    };
});
