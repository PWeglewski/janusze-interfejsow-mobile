'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('LogoutCtrl', function ($rootScope, $window, $route) {
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
