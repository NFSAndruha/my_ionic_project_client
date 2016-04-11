(function () {
  'use strict';

  angular
      .module('MyIonicProject.task')
      .controller('TaskController', TaskController);

  TaskController.$inject = [
    '$scope', '$stateParams', '$state',
    'TaskUtils'
  ];

  function TaskController($scope, $stateParams, $state,
                          TaskUtils) {
    var taskId = $stateParams.taskId;

    getTask(taskId);
    function getTask(taskId) {
      TaskUtils.getTask(taskId)
          .then(function (task) {
            $scope.task = task;
          }, function (err) {
            console.log(err);
          });
    }

    $scope.goToDashboard = function () {
      $state.go('dashboard');
    };

    $scope.removeTask = function (task) {
      TaskUtils.removeTask(task._id)
          .then(function () {
            $scope.goToDashboard();
          }, function (err) {
            console.log(err);
          });
    }
  }
})();
