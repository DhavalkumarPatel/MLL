// Karma configuration
// Generated on Fri Mar 25 2016 08:07:40 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'tests/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
        },

        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        reporters: ['dots', 'junit'],

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: true,

        concurrency: Infinity,

        junitReporter: {
          outputFile: 'test-results.xml'
        }
    })
};