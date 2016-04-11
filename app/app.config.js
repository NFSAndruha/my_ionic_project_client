(function () {
  'use strict';

  angular
      .module('MyIonicProject')
      .config(configApp)
      .constant('server_host', 'https://my-ionic-project.herokuapp.com/')
      .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
          if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if (window.StatusBar) { StatusBar.styleDefault(); }
        });
      });

  configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configApp($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('dashboard', {
          url: "/",
          templateUrl: "./app/dashboard/dashboard.html",
          controller: 'DashboardController'
        })
        .state('task', {
          url: "/:taskId",
          templateUrl: "./app/task/task.html",
          controller: 'TaskController'
        });
  }
})();