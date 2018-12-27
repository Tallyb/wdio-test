'use strict';

exports.config = {
    //services: ['appium'],
    port: 4723,
    appium: {
        args: {
            address: '127.0.0.1',
            port: 4723
        }
    },
    capabilities: [{
        maxInstances: 1,
        app: '/Users/tallyb/Documents/yoobic/yoobic-e2e/builds/Operations.app',
        browserName: '',
        deviceName: 'iPhone 7 Plus',
        platformVersion: '11.2',
        platformName: 'iOS',
        autoWebview: true
        // autoAcceptAlerts: true,
        // locationServicesEnabled: true,
        // locationServicesAuthorized: true,
    }],
    //protocol: 'https',
    maxInstances: 1,
    connectionRetryCount: 1,
    specs: ['./features/mobile.feature'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/steps.js'
        ],
        backtrace: false,
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tags: [],
        timeout: 900000,
        ignoreUndefinedDefinitions: false
    },
    reporters: ['spec'],
    reporterOptions: {
        spec: { outputDir: './reports/spec-results' }
    },
    exclude: [],
    data: {},
    deprecationWarnings: false,
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    before: function () {
    },
    beforeFeature: function (feature){
    }
};