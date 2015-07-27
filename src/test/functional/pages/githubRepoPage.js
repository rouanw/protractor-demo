var githubRepoPage = function () {
    this.getDescription = function () {
      return element(by.css('.repository-description')).getText();
    };
};

module.exports = new githubRepoPage();
