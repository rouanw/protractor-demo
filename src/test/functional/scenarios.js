'use strict';

var googleHomePage = require('./pages/googleHomePage.js');
var googleResultsPage = require('./pages/googleResultsPage.js');

describe('protractor github page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should be the first google search result', function() {
    googleHomePage.load();
    googleHomePage.enterSearchTerm('protractor github');
    googleHomePage.clickSearchButton();
    googleResultsPage.clickFirstResult();
    expect(element(by.css('.repository-description p')).getText()).toBe('E2E test framework for Angular apps');
  });

});
