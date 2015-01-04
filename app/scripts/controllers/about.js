'use strict';

/**
 * @ngdoc function
 * @name crickStuffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crickStuffApp
 */
angular.module('crickStuffApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
