var {
    defineSupportCode
} = require('cucumber');

defineSupportCode(function ({
    Given
}) {
    Given(/^Log Something$/, function () {
        console.log('Logging something')
    });
    
    Given(/^Do Something$/, function () {
        let selector = '//a[.="API"]';
        browser.waitForEnabled(selector);
        browser.click(selector);
        browser.waitForEnabled('//article/a[.="Improve this doc"]');
    });

    Given(
        /^User is located in latitude: (\-?\d+\.?\d*), longitude: (\-?\d+\.?\d*)$/,
        function setUserLocation(latitude, longitude) {    
            let location = { latitude: parseFloat(latitude), longitude: parseFloat(longitude), altitude: 0 };
            browser.setGeoLocation(location);   
            if (!browser.isIOS && !browser.isAndroid) {
                browser.url('/');    
                //browser.location(location);
            } else {
                
            }
        }
    );
});
