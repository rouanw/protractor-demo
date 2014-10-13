var githubRepoPage = function () {
    this.getDescription = function () {
      return element(by.css('.repository-description p')).getText();
    };
};

module.exports = new githubRepoPage();
