'use strict';

/**
 * @ngdoc function
 * @name crickStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crickStuffApp
 */
angular.module('crickStuffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
