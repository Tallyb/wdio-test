var {
    defineSupportCode
} = require('cucumber');

defineSupportCode(function ({
    Given
}) {
    Given(/^Do Something$/, function () {
        browser.waitForEnabled('//article/a[.="Improve this doc"]');
    });
});