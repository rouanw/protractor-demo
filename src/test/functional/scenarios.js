'use strict';

var helpers = require('./helpers.js');
var googleHomePage = require('./pages/googleHomePage.js');

describe('protractor github page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should be the first google search result', function() {
    googleHomePage.load();
    googleHomePage.enterSearchTerm('protractor github');
    googleHomePage.clickSearchButton();
    var firstResult = by.css('h3.r a');
    helpers.waitForElement(firstResult);
    element(firstResult).click();
    expect(element(by.css('.repository-description p')).getText()).toBe('E2E test framework for Angular apps');
  });

});
