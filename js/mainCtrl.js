var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
  $scope.friends = [
    {
      name: "Brett",
      gender: "male",
      age: 28
    },
    {
      name: "Gilga",
      gender: "male",
      age: 29
    },
    {
      name: "Meaghan",
      gender: "female",
      age: 24
    }
  ];
});
