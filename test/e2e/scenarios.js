'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('homepage', function() {

    beforeEach(function() {
      browser.get('login');
    });


    it('should render loginPage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/login/);
    });

  });
});
