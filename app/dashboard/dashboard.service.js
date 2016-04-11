(function(){
  'use strict';

  angular
      .module('MyIonicProject.dashboard')
      .factory('DashboardUtils', DashboardUtils);

  DashboardUtils.$inject = [
    '$q', '$http',
    'server_host'
  ];

  function DashboardUtils($q, $http,
                          server_host) {
    var service = {
      getTasks: getTasks,
      addTask: addTask
    };

    function getTasks() {
      var defer = $q.defer();

      $http.get(server_host + 'api/task')
          .success(defer.resolve)
          .error(defer.reject);

      return defer.promise;
    }

    function addTask(task) {
      var defer = $q.defer();

      $http.post(server_host + 'api/task', { task: task })
          .success(defer.resolve)
          .error(defer.reject);

      return defer.promise;
    }

    return service;
  }

})();