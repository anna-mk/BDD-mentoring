"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },
    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@epam'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
};