(function(){
  'use strict';

  angular
      .module('MyIonicProject.task')
      .factory('TaskUtils', TaskUtils);

  TaskUtils.$inject = [
    '$q', '$http',
    'server_host'
  ];

  function TaskUtils($q, $http,
                          server_host) {
    var service = {
      getTask: getTask,
      updateTask: updateTask,
      removeTask: removeTask
    };

    function getTask(taskId) {
      var defer = $q.defer();

      $http.get(server_host + 'api/task/' + taskId)
          .success(defer.resolve)
          .error(defer.reject);

      return defer.promise;
    }

    function updateTask(task) {
      var defer = $q.defer();

      $http.put(server_host + 'api/task/' + task._id, task)
          .success(defer.resolve)
          .error(defer.reject);

      return defer.promise;
    }

    function removeTask(taskId) {
      var defer = $q.defer();

      $http.delete(server_host + 'api/task/' + taskId)
          .success(defer.resolve)
          .error(defer.reject);

      return defer.promise;
    }

    return service;
  }

})();