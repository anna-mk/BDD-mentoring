"use strict";
let {Then, When, Given} = require('cucumber');
const stepFunctions = require('../utils/stepFunctions.js')
const logger = require('../../config/loggerConfig.js').logger;

const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (.*)$/, (alias, state) => {
    let element = stepFunctions.getPageObjectElement(alias);
    let currentExpectedCondition = stepFunctions.expectedCondition(state);
    logger.info(`I wait until ${alias} is ${state}`);
    return browser.wait(currentExpectedCondition(element), CLICKABLE_TIMEOUT);
});