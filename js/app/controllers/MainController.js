function MainController($scope) {
  $scope.contact = {
    name: 'Bill Gates',
    phone: '01234567890'
  };
 
  $scope.year = '2016';
}

var module = angular.module('app'); 
module.controller('MainController', MainController); 