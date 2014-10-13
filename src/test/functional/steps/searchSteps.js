var googleHomePage = require('../pages/googleHomePage.js');

var searchSteps = function () {
    this.searchFor = function (searchTerm) {
      googleHomePage.load();
      googleHomePage.enterSearchTerm('protractor github');
      googleHomePage.clickSearchButton();
    };
};

module.exports = new searchSteps();
