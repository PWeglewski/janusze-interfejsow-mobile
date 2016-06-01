'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('MainCtrl', function ($rootScope, $window, $route) {
    this.$route = $route;

    // if ($rootScope.user == undefined || !$rootScope.user.authenticated) {
    //   $window.location.href = '#/loginscreen'
    // }
    var superuser = {
      'username': 'superuser',
      'isSuperuser': true,
      'authenticated': true
    }

    $rootScope.user = superuser;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.calculate = function (project) {
      console.log('test');
      project.weekSummary.forEach(function(day, index){
        day.hours=0;
      });
      project.weekTotal=0;
      project.tasks.forEach(function (task, index) {
        task.total=0;
        task.days.forEach(function (day, index) {
          console.log(day.hours);
          var intHours = parseInt(day.hours);
          task.total+=intHours;
          project.weekSummary[index].hours+=intHours;
          project.weekTotal+=intHours;
        });
      });
      console.log(project);
    };

    this.project1 = {
      'showbody': false,
      'weekSummary': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
      'weekTotal': 0,
      'tasks': [
        {
          'name': 'Preparation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Design',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Meeting',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Implementation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Review',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Testing',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        }
      ]
    };
  });
