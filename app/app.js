(function () {
  'use strict';

  angular
      .module('MyIonicProject', [
        'ionic',
        'ui.router',
        'MyIonicProject.dashboard',
        'MyIonicProject.task'
      ]);
})();
