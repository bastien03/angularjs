angularjs
=========

Angularjs project

## Prerequisites
- node & npm are installed
- [protractor](https://github.com/angular/protractor) is installed
- [phantomjs](http://phantomjs.org/) is installed: `brew update && brew install phantomjs`
- `npm install`

## How to start the dev mode
- `grunt serve`

## How to run the test
 - end to end tests
  - start the webdriver: `webdriver-manager start`
  - start the application: `grunt serve`
  - run the tests: `protractor test/protractor.conf.js`
