module.exports = {
    command: function () {
        return this
            .getLocationInView('#site-footer')
            .click('.foot-links a[href*="/sitemap"]')
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .assert.urlContains('/sitemap')
            .assert.containsText('.global-views-breadcrumb', 'HOME SITEMAP')
            // .back()
            // .pause(2000)

    }

}