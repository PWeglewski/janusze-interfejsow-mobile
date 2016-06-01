'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ngRoute',
  // TODO: load other modules selected during generation
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'main/templates/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
      activetab: 'main'
    })
    .when('/about', {
      templateUrl: 'main/templates/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about',
      activetab: 'about'
    })
    .when('/loginscreen', {
      templateUrl: 'main/templates/loginscreen.html',
      controller: 'LoginscreenCtrl',
      controllerAs: 'loginscreen',
      activetab: 'loginscreen'
    })
    .when('/users', {
      templateUrl: 'main/templates/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'users',
      activetab: 'users'
    })
    .when('/projects', {
      templateUrl: 'main/templates/projects.html',
      controller: 'ProjectsCtrl',
      controllerAs: 'projects',
      activetab: 'projects'
    })
    .when('/reports', {
      templateUrl: 'main/templates/reports.html',
      controller: 'ReportsCtrl',
      controllerAs: 'reports',
      activetab: 'reports'
    })
    .when('/logout', {
      templateUrl: 'main/templates/logout.html',
      controller: 'LogoutCtrl',
      controllerAs: 'logout',
      activetab: 'logout'
    })
    .when('/notimplemented', {
      templateUrl: 'main/templates/notimplemented.html',
      controller: 'NotimplementedCtrl',
      controllerAs: 'notimplemented',
      activetab: 'notimplemented'
    })
    .otherwise({
      redirectTo: '/loginscreen'
    });
});
