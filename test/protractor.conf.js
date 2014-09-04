exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/protractor-spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }, {
    browserName: 'safari'
  }, {
    browserName: 'phantomjs'
  }]
}