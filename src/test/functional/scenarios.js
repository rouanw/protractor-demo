'use strict';

var helpers = require('./helpers.js');

describe('protractor github page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should be the first google search result', function() {
    browser.get('http://www.google.co.za');
    element(by.id('gbqfq')).sendKeys('protractor github');
    element(by.id('gbqfb')).click();
    var firstResult = by.css('h3.r a');
    helpers.waitForElement(firstResult);
    element(firstResult).click();
    expect(element(by.css('.repository-description p')).getText()).toBe('E2E test framework for Angular apps');
  });

});
