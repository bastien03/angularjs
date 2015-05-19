'use strict';

angular.module('hamilcarApp')
  .controller('FormCtrl', function ($scope) {
    $scope.submitButton = "submit form";
    $scope.submit = function() {
      alert('submit form -> ' + $scope.title);
    };
  });
