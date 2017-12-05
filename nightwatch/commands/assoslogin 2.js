module.exports = {
    command: function () 
    {
        return this
.url(client.launchUrl)
      .waitForElementVisible('.ico-user', 3000)
        //.assert.containsText('#cms-content-2-2 .bx-viewport ul li:nth-child(1) a span strong','BMC Racing')
        .click('#site-header .header-content .header-menu-profile ul li a i')
        .waitForElementVisible('#login-email',3000)
        .setValue('#login-email','ritesh@paperplane.net', function () { console.log('entered email id'); })
        .setValue('#login-password','welcome123', function () { console.log('entered password'); })
        .click('.login-register-login-submit.secondary-button')
        //.click('.login-register-login-submit.secondary-button')
        
    },
};