  'use strict';
  /**
   * @ngdoc function
   * @name com.module.navbar.controller:NavBarCtrl
   * @description Redirect for acess
   * @requires $q
   * @requires $scope
   * @requires $state
   * @requires $location
   * @requires AppAuth
   **/
  angular
      .module('com.module.navigation', ['ui.bootstrap'])
      .controller('DropdownCtrl', function($scope) {

      $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});