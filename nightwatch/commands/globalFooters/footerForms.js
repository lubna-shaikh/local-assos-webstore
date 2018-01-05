module.exports = {
    command: function ( item, urlComponent, breadcrumbText) {
        return this
            .getLocationInView('#site-footer')
            .click(item)
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .verify.urlContains(urlComponent)
            .verify.containsText('.global-views-breadcrumb', breadcrumbText)
            // .click('.ditch-mobile .header-logo-image')
            .back()
            // .getLocationInView('.newsletter-sign-up')
            // .verify.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label');
    }
}