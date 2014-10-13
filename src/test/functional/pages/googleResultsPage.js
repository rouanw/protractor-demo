var helpers = require('../helpers.js');

var googleResultsPage = function () {
    this.clickFirstResult = function () {
      var firstResult = by.css('h3.r a');
      helpers.waitForElement(firstResult);
      element(firstResult).click();
    };
};

module.exports = new googleResultsPage();
