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

'use strict';
angular.module('main')
.service('Main', function ($log, $timeout) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});

'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('UsersCtrl', function ($rootScope, $window, $route) {
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

'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('ReportsCtrl', function ($rootScope, $window, $route) {
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

'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('ProjectsCtrl', function ($rootScope, $window, $route) {
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

'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:NotimplementedCtrl
 * @description
 * # NotimplementedCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('main')
  .controller('NotimplementedCtrl', function ($route) {
    this.$route = $route;
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

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

'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, $http, $timeout, Main, Config, $cordovaDevice) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  // bind data from services
  this.someData = Main.someData;
  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));

  // PASSWORD EXAMPLE
  this.password = {
    input: '', // by user
    strength: ''
  };
  this.grade = function () {
    var size = this.password.input.length;
    if (size > 8) {
      this.password.strength = 'strong';
    } else if (size > 3) {
      this.password.strength = 'medium';
    } else {
      this.password.strength = 'weak';
    }
  };
  this.grade();

  // Proxy
  this.proxyState = 'ready';
  this.proxyRequestUrl = Config.ENV.SOME_OTHER_URL + '/get';

  this.proxyTest = function () {
    this.proxyState = '...';

    $http.get(this.proxyRequestUrl)
    .then(function (response) {
      $log.log(response);
      this.proxyState = 'success (result printed to browser console)';
    }.bind(this))
    .then($timeout(function () {
      this.proxyState = 'ready';
    }.bind(this), 6000));
  };

});

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


'use strict';
angular.module('januszeInterfejsow', [
  // load your modules here
  'main', // starting with the main module
]);
