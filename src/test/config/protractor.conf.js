exports.config = {
    chromeDriver: '../../../node_modules/chromedriver/bin/chromedriver',
    specs: ['../functional/*.js'],
    allScriptsTimeout: 20000,
    seleniumServerJar: '../../../node_modules/selenium-server/lib/runner/selenium-server-standalone-2.35.0.jar',

    splitTestsBetweenCapabilities: true,
    multiCapabilities: [{
        browserName: 'chrome',
        count: 1
    }],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 70000
    }
};
