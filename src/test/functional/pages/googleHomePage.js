var googleHomePage = function () {
    this.load = function () {
      browser.get('http://www.google.co.za');
    };

    this.enterSearchTerm = function (term) {
      element(by.css('input[title="Search"]')).sendKeys(term);
    };

    this.clickSearchButton = function () {
      element(by.css('button[value="Search"]')).click();
    };
};

module.exports = new googleHomePage();
