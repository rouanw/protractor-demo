module.exports = function (grunt) {

    grunt.initConfig({
        protractor: {
            chrome: {
                options: {
                    configFile: 'src/test/config/protractor.conf.js'
                }
            }
        }
      });

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', 'Run tests', ['protractor:chrome']);
};
