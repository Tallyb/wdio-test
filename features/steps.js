var {
    defineSupportCode
} = require('cucumber');

defineSupportCode(function ({
    Given
}) {
    Given(/^Do Something$/, function () {
        browser.url('guide/testrunner/configurationfile.html')
        browser.waitForEnabled('//article/a[.="Improve this doc"]');
    });
});