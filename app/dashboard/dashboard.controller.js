(function () {
  'use strict';

  angular
      .module('MyIonicProject.dashboard')
      .controller('DashboardController', DashboardController);

  DashboardController.$inject = [
    '$scope', '$state',
    '$ionicModal',
    'DashboardUtils'
  ];

  function DashboardController($scope, $state,
                               $ionicModal,
                               DashboardUtils) {
    getTasks();
    function getTasks() {
      DashboardUtils.getTasks()
          .then(function (tasks) {
            $scope.tasks = tasks;
          }, function (err) {
            console.log(err);
          })
    }

    $ionicModal.fromTemplateUrl('new-task.html', {
      scope: $scope,
      animation: 'slide-in-right'
    }).then(function (modal) {
      $scope.newTaskModalDialog = modal;
    });

    $scope.newTask = function () {
      $scope.newTaskModalDialog.show();
    };

    $scope.closeNewTaskModalDialog = function () {
      $scope.newTaskModalDialog.hide();
    };

    $scope.addTask = function (task) {
      console.log(task);
      $scope.newTaskModalDialog.hide();
      DashboardUtils.addTask(task).
          then(function (ok) {
            console.log(ok);

            getTasks();
          }, function (err) {
            console.log(err);
          });
    };

    $scope.showTask = function (task) {
      $state.go('task', { taskId: task._id });
    }
  }
})();
