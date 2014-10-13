var googleHomePage = function () {
    this.load = function () {
      browser.get('http://www.google.co.za');
    };

    this.enterSearchTerm = function (term) {
      element(by.id('gbqfq')).sendKeys(term);
    };

    this.clickSearchButton = function () {
      element(by.id('gbqfb')).click();
    };
};

module.exports = new googleHomePage();
