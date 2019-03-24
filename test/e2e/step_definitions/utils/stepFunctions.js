const EC = protractor.ExpectedConditions;
const epamPO = require('../../po/epamPageObject.json');
const logger = require('../../config/loggerConfig.js').logger;

let getPageObjectElement = (alias) => {
    let pageElement = epamPO[alias];
    if (pageElement['isCollection'] === true) {
        pageElement = element.all(by.css(pageElement.selector));
        return pageElement;
    }
    else {
        pageElement = element(by.css(pageElement.selector));
        return pageElement;
    }
};

let expectedCondition = (state) => {
    let expectedConditionFunction;

    switch (state) {
        case "present":
            expectedConditionFunction = EC.presenceOf.bind(EC);
            break;
        case "clickable":
            expectedConditionFunction = EC.elementToBeClickable.bind(EC);
            break;
        case "visible":
            expectedConditionFunction = EC.visibilityOf.bind(EC);
            break;
        case "invisible":
            expectedConditionFunction = EC.invisibilityOf.bind(EC);
            break;
        case "selected":
            expectedConditionFunction = EC.elementToBeSelected.bind(EC);
            break;
        case "gone":
            expectedConditionFunction = EC.stalenessOf.bind(EC);
            break;
        default:
            logger.error(`Wrong expected condition provided: [${state}]`);
            throw new Error('Wrong expected condition provided.');
    }
    return expectedConditionFunction;
};

module.exports = {
    getPageObjectElement,
    expectedCondition
};