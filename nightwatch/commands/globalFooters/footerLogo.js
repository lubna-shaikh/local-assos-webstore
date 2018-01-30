module.exports={
     command: function () {
        return this
            .getLocationInView('#site-footer')
            .click('.foot-logo-ico')
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .assert.urlContains('https://www.assos.com')
            .getLocationInView('.news-letter-subscription .newsletter-subscription-form-label')
            .verify.elementPresent('.news-letter-subscription .newsletter-subscription-form-label')
            .pause(2000)

    }
}