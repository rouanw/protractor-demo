'use strict';

var searchSteps = require('./steps/searchSteps.js');
var googleResultsPage = require('./pages/googleResultsPage.js');
var githubRepoPage = require('./pages/githubRepoPage.js');

describe('protractor github page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });

  it('should be the first google search result', function() {
    searchSteps.searchFor('protractor github');
    googleResultsPage.clickFirstResult();
    expect(githubRepoPage.getDescription()).toBe('E2E test framework for Angular apps');
  });

});
