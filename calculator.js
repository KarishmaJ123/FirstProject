const { browser, element } = require("protractor");

describe('Multiple Calculator scenario' , function(){

    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title' , function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add two numbers' , function(){
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
        var result = element(by.className('ng-binding'));
        expect(result.getText()).toEqual('5');
    });

    it('should multiply two numbers' , function(){
        element(by.model('first')).sendKeys(3);
        var select = element(by.model('operator'));
        select.$('[value="MULTIPLICATION"]').click();
        element(by.model('second')).sendKeys(2); 
        element(by.id('gobutton')).click();
        var result1 = element(by.className('ng-binding'));
        expect(result1.getText()).toEqual('7');
    });
});