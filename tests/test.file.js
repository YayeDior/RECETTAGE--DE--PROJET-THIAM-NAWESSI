
module.exports = {

    'login form' : function (browser) {
  
      browser
  
      .url('https://twitter.com/')
      .waitForElementVisible('body', 10000)
  
      .setValue('input[name="email"]', 'testtnightwatch@tst.com')
  
      .setValue('input[name="password"]', 'test@tst.com')
  
      .click('button[type="submit"]')
       .end ();
  
    }
  
  }