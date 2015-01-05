'use strict';

/**
 * @ngdoc function
 * @name crickStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crickStuffApp
 */
angular.module('crickStuffApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var req = {
     method: 'GET',
     url: 'http://synd.cricbuzz.com/j2me/1.0/livematches.xml'
    };

    $http(req).
      success(function(data, status, headers, config) {
        console.log(data);

        var x2js = new X2JS();
        var json = x2js.xml_str2json( data );
        console.log(json);
        var s = JSON.stringify(json.mchdata);
        $scope.matches = JSON.parse(s);
        console.log($scope.matches);
        console.log(status);
        console.log(headers);
        console.log(config);
      }).
      error(function(data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
      });
  });
