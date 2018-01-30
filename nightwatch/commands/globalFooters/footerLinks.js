module.exports = {
    command: function (item, urlComponent,  breadcrumbText, activeClass, panelCSS, panelText) {
        return this
            .getLocationInView('#site-footer')
            .click(item)
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .assert.urlContains(urlComponent)
            .assert.containsText('.global-views-breadcrumb', breadcrumbText)
            .verify.containsText(panelCSS, panelText)
            .verify.visible(activeClass)
            // .back()
            // .pause(5000)

    }

}