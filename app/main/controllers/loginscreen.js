'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:LoginscreenCtrl
 * @description
 * # LoginscreenCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('LoginscreenCtrl', function ($rootScope, $window, $route) {
    this.$route = $route;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.authenticationError = false;

    var superuser = {
      'username':'superuser',
      'isSuperuser': true,
      'authenticated':true
    }

    var user = {
      'username':'user',
      'isSuperuser': false,
      'authenticated':true
    }

    this.login = function () {
      this.authenticationError = false;

      if(this.username==='superuser'){
        $rootScope.user = superuser;
        $window.location.href = '#/main'
      }
      else if(this.username==='user'){
        $rootScope.user = user;
        $window.location.href = '#/main'
      }
      else{
        this.authenticationError = true;
      }
    };



  });
