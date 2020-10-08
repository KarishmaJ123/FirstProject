
//Test 1
describe('Protractor Perfecto Demo', function() {
    it('should have a title', function(done) {
      browser.driver.get('https://www.google.com'); //Navigate to google.com
      //Locate the search box element and insert text
      //Click on search button
      browser.driver.findElement(by.name('q')).sendKeys('PerfectoCode GitHub');
      browser.driver.findElement(by.css('#tsbb > div')).click();
      //Click the first search result
      browser.driver.findElement(by.css('#rso > div > div:nth-child(1) > div > div > div._OXf > h3 > a')).click();
      //Assert that page title quals to expected title
      expect(browser.driver.getTitle()).toEqual('GitHub - PerfectoCode/Samples: Product Samples');
      done();
    });
  });