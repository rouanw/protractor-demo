'use strict';

describe('protractor github page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should be the first google search result', function() {
    browser.get('http://www.google.co.za');
    element(by.css('input[title="Search"]')).sendKeys('protractor github');
    element(by.css('button[value="Search"]')).click();
    browser.wait(function () {
      return browser.isElementPresent(by.css('h3.r a'))
    }, 1000);
    element(by.css('h3.r a')).click();
    expect(element(by.css('.repository-description')).getText()).toBe('E2E test framework for Angular apps');
  });

});
