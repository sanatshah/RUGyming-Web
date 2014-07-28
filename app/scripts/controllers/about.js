'use strict';

/**
 * @ngdoc function
 * @name rugymingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rugymingApp
 */
angular.module('rugymingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
