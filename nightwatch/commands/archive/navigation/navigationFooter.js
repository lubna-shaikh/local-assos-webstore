

const navigateLinks = function (client, item, urlComponent, breadcrumbCSS, breadcrumbText, activeClass, panelCSS, panelText) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .getLocationInView('#site-footer')
        .click(item)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .verify.urlContains(urlComponent)
        .verify.containsText(breadcrumbCSS, breadcrumbText)
        .verify.containsText(panelCSS, panelText)
        .verify.visible(activeClass)
        .click('.ditch-mobile .header-logo-image')
        .getLocationInView('.newsletter-sign-up')
        .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label').end();
}

const navigateForms = function (client, item, urlComponent, breadcrumbCSS, breadcrumbText) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .getLocationInView('#site-footer')
        .click(item)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .verify.urlContains(urlComponent)
        .verify.containsText(breadcrumbCSS, breadcrumbText)
        .click('.ditch-mobile .header-logo-image')
         .getLocationInView('.newsletter-sign-up')
            .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
        .end();
}

const navigateSocialMedia = function (client, item, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .getLocationInView('#site-footer')
        .click(item)
        .window_handles(function (result) {
            var newHandle = result.value[1];
            this.switchWindow(newHandle)
                .verify.urlContains(urlComponent);
        })
        .end();
}

module.exports = {
    '@tags': ['navigation'],
    'it Should navigate to the CUSTOMER SERVICE web page and back to Home page': client => {
        navigateLinks(client, 'a[href="/customer-service"]', '/customer-service', '.global-views-breadcrumb', 'HOME CUSTOMER SERVICE', '.static-sidenav:nth-child(1) .static-menu-tree-node-anchor-item-head', '.static-sidenav:nth-child(1) .static-menu-tree-node-anchor-item-head', 'Customer Service');
    },

    'it Should navigate to the SIZE GUIDE web page and back to Home page': client => {
        navigateLinks(client, 'a[href="/size-guide"]', '/size-guide', '.global-views-breadcrumb', 'HOME SIZE GUIDE', '.size-chart-anchor-item.active', '.size-chart-anchor-item', 'SIZE GUIDE');
    },

    'it Should navigate to the PRODUCT CARE web page and back to Home page': client => {
        navigateLinks(client, 'a[href*="/product-care"]', '/product-care', '.global-views-breadcrumb', 'HOME PRODUCT CARE', '.product-care-anchor-item.active', '.product-care-anchor-item', 'PRODUCT CARE');
    },

    'it Should navigate to the RETURNS & EXCHANGES web page and back to Home page': client => {
        navigateLinks(client, 'a[href="/returns-exchanges"]', '/returns-exchanges', '.global-views-breadcrumb', 'HOME RETURNS & EXCHANGES', '.returns-anchor-item.active', '.returns-anchor-item', 'RETURNS & EXCHANGES');
    },

    'it Should navigate to the WARRANTY & REPAIR POLICY web page and back to Home page': client => {
        navigateLinks(client, 'a[href="/warranty-repair-policy"]', '/warranty-repair-policy', '.global-views-breadcrumb', 'HOME WARRANTY & REPAIR POLICY', '.warranty-anchor-item.active', '.warranty-anchor-item', 'WARRANTY & REPAIR POLICY');
    },



    'it Should navigate to the BECOME A DEALER web page and back to Home page': client => {
        navigateForms(client, 'a[href="/become-a-dealer"]', '/become-a-dealer', '.global-views-breadcrumb', 'HOME BECOME A DEALER');
    },

    'it Should navigate to the CONTACT US web page and back to Home page': client => {
        navigateForms(client, 'a[href="/contact-us"]', '/contact-us', '.global-views-breadcrumb', 'HOME CONTACT US');
    },

    'it Should navigate to the PRIVACY web page and back to Home page': client => {
        navigateLinks(client, '.foot-links a[href*="/privacy"]', '/privacy', '.global-views-breadcrumb', 'HOME PRIVACY', '.privacy-anchor-item.active', '.privacy-anchor-item', 'PRIVACY');
    },

    'it Should navigate to the TERMS & CONDITIONS web page and back to Home page': client => {
        navigateLinks(client, 'a[href="/terms-conditions"]', '/terms-conditions', '.global-views-breadcrumb', 'HOME TERMS & CONDITIONS', '.terms-anchor-item.active', '.terms-anchor-item', 'TERMS & CONDITIONS');
    },

    'it Should navigate to the SITEMAP web page and back to Home page': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            .getLocationInView('#site-footer')
            .click('a[href="/sitemap"]')
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .verify.urlContains('/sitemap')
            .verify.containsText('.global-views-breadcrumb', 'HOME SITEMAP')
            .click('.ditch-mobile .header-logo-image')
            .getLocationInView('.newsletter-sign-up')
            .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
            .end();
    },

    'it Should click on the ASSOS logo in the footer, and redirect users to the HOME page': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            //  .getLocationInView('#site-footer')
            .getLocationInView('.foot-logo-ico')
            .click('.foot-logo-ico')
            .pause(5000)
            .getLocationInView('.ditch-mobile .header-logo-image')
            // .waitForElementVisible('.ditch-mobile .header-logo-image')
             .getLocationInView('.newsletter-sign-up')
            .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
            .end();
    },

    'it Should navigate to the CAREERS web page and back to Home page': client => {
        navigateSocialMedia(client, 'a[href="https://www.linkedin.com/company/assos-of-switzerland"]', 'https://www.linkedin.com/company/assos-of-switzerland');
    },

    'it Should navigate to the ASSOS Facebook page': client => {
        navigateSocialMedia(client, '.icon.facebook-icon', 'https://www.facebook.com/assosofswitzerland');
    },

    'it Should navigate to the ASSOS Twitter page': client => {
        navigateSocialMedia(client, '.icon.tweet-icon', 'https://twitter.com/assos_com');
    },

    'it Should navigate to the ASSOS Instagram page': client => {
        navigateSocialMedia(client, '.icon.instagram-icon', 'https://www.instagram.com/assosofswitzerland/');
    },

    'it Should navigate to the ASSOS YouTube page': client => {
        navigateSocialMedia(client, '.icon.youtube-icon', 'https://www.youtube.com/channel/UCgS2H1nSzBL2F2LbDCQGi3Q');
    },

    'it Should navigate to the ASSOS LinkedIn page': client => {
        navigateSocialMedia(client, '.icon.linkedin-icon', 'https://www.linkedin.com/company/assos-of-switzerland');
    },

}