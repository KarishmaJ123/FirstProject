exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumSessionId: '42f2d87576a62700e7f703f3e14785ad' ,
    chromeDriver: require('chromedriver/lib/chromedriver').path,
    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      /*chromeoptions : {
        //debuggerAddress : '127.0.0.1:9222'
        w3c: false
    },*/

    framework: 'jasmine2',
    
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['NopCommerce.js'],

    onPrepare: function(){  //configure junit xml report 
 
      var jasmineReporters = require('jasmine-reporters'); 
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({ 
          consolidateAll: false, 
          filePrefix: 'guitest-xmloutput', 
          savePath: 'testresults' 
      })); 

},


};