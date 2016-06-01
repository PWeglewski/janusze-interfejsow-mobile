'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('AboutCtrl', function ($rootScope, $window, $route) {
    this.$route = $route;

    if ($rootScope.user == undefined || !$rootScope.user.authenticated) {
      $window.location.href = '#/loginscreen'

    }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
