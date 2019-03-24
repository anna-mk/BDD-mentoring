"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js');
const logger = require('../../config/loggerConfig.js').logger;

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    notArg = notArg ? ' not' : '';
    let element = elementHelper(alias);
    let elementText = await element.getText();
    logger.info(`Text of ${alias} should${notArg} contain ${textToContain}`);
    return expect(elementText.indexOf(textToContain)).to.not.equal(-1);
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }
});