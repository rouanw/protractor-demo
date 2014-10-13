var helpers = function () {
    this.waitForElement = function (element) {
        browser.wait(function () {
          return browser.isElementPresent(element);
        }, 1000);
    };
};

module.exports = new helpers();
