const { element, browser } = require("protractor");
const until = protractor.ExpectedConditions;

describe('Shopping from Nop Commerce', function(){

    beforeEach(function(){
    // Navigating the URL nopcommerce site
    browser.ignoreSynchronization = true; 
    //browser.get('https://demo.nopcommerce.com/');
    browser.manage().window().maximize();
    browser.sleep(15000);
        });

    it('', () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
       });

    it('Should able to search the products and add to the cart', function(){
    
    element(by.name('q')).sendKeys('Lenovo');
    element(by.className('button-1 search-box-button')).click();
    //browser.sleep(10000);
    element(by.xpath("//div[contains(@class,'search-results')]/div/div/div[contains(@class,'item-box')][1]/div/div[contains(@class,'picture')]")).click();
    // browser.executeScript('arguments[0].scrollIntoView()' , searchedProducts);
    // searchedProducts.click();
    browser.sleep(10000);
    const element1 = element(by.xpath("//div[contains(@class,'add-to-cart-panel')]//input[contains(@id,'add-to-cart-button-3')]"));
    browser.wait(until.elementToBeClickable(element1)),5000;
    browser.executeScript('arguments[0].scrollIntoView()', element1);
    // element1.isDisplayed().then(function(result) {
    // if ( result ) {
        
        element1.click();
    // } else {
    //     //do nothing
    // }
    // });
         });

    it('Should navigate to Shopping Cart Page and check the item', function(){
        
        element(by.xpath("//li[contains(@id,'topcartlink')]/a")).click();
        let list = element.all(by.xpath("(//table[contains(@class,'cart')])[1]//tbody/tr"));
        expect(list.count()).toBe(1);
    });

    it('Should check remove the item and update the shopping cart' , function(){
        var removeCheckbox = element(by.xpath("input[@name='removefromcart']"));
        //input[@name='removefromcart']
            browser.sleep(5000);
            if(removeCheckbox.isDisplayed()){
            removeCheckbox.click();
        }
        else{
            browser.sleep(10000);
        }
        element(by.xpath("//div[contains(@class,'common-buttons')]//input[contains(@class,'button-2 update-cart-button')]")).click;
        let list1 = element.all(by.xpath("(//table[contains(@class,'cart')])[1]//tbody/tr"));
        expect(list1.count()).toBe(0);
    });

    afterAll(function() {
        // browser.manage().window().deleteAllCookies();
        browser.driver.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear();'); 
        browser.executeScript('window.localStorage.clear();'); 
    });

});