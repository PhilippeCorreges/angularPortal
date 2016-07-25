/**
 * Created by IOSoftwareSAS on 23/06/2016.
 */
'use strict';

describe('LayoutCtrl', function() {
  beforeEach(module('com.module.core'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.setLocale', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('LayoutCtrl', { $scope: $scope });
      $scope.setLocale();
      expect($scope.setLocale).toEqual(true);
    });
  });
});