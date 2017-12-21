const clickTab = function (client, tab, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .click(tab)
        .waitForElementVisible('.header-main-nav-content')
        .assert.urlContains(urlComponent)
        .pause(10000)
        .click('.ditch-mobile .header-logo-image')
        .getLocationInView('.newsletter-sign-up')
        .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
        .end();
}

const hoverAndClick = function (client, hoverItem, promItem, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .moveToElement(hoverItem, 1, 1)
        .click(promItem)
        .waitForElementVisible('.header-main-nav-content')
        .assert.urlContains(urlComponent)
        .pause(10000)
        .click('.ditch-mobile .header-logo-image')
        .getLocationInView('.newsletter-sign-up')
        .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
        .end();
}

const selectAndClick = function (client, mainItem, subItem, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .click(mainItem)
        .click(subItem)
        .waitForElementVisible('.header-main-nav-content')
        .assert.urlContains(urlComponent)
        .pause(10000)
        .click('.ditch-mobile .header-logo-image')
        .getLocationInView('.newsletter-sign-up')
        .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
        .end();
}

const navigateDirectly = function (client, item, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .click(item)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .assert.elementPresent(urlComponent)
        .click('.ditch-mobile .header-logo-image')
        .getLocationInView('.newsletter-sign-up')
        .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
        .end()
}

module.exports = {
    '@tags': ['login'],
    'it Should navigate to the Men web page and back to Home page': client => {
        clickTab(client, '.ditch-mobile .MEN', '/men');
    },

    '@tags': ['login'],
    'it Should navigate to the Women web page and back to Home page': client => {
        clickTab(client, '.ditch-mobile .WOMEN', '/women');
    },

    'it Should navigate to the New > Men Promo item web page and back to Home page':   client => {
        hoverAndClick(client, '.ditch-mobile .NEW', '.ditch-mobile a[href*="&gender=M"].menu-promo-content-block', '&gender=M');
    },

    'it Should navigate to the New > Women Promo item web page and back to Home page': client => {
        hoverAndClick(client, '.ditch-mobile .NEW', '.ditch-mobile a[href*="&gender=W"].menu-promo-content-block', '&gender=W');
    },

    'it Should navigate to SHORTS STORIES web page and back to Home page': client => {
        navigateDirectly(client, '.ditch-mobile .Shorts.Stories', '.blog-main')
    },

    'it Should navigate to the Cart > SHOP MEN web page and back to Home page': client => {
        selectAndClick(client, '.header-mini-cart-menu-cart-icon', '.latest-collections-buttons a[href="/men"]', '/men');
    },

    'it Should navigate to the Cart > SHOP WOMEN web page and back to Home page': client => {
        selectAndClick(client, '.header-mini-cart-menu-cart-icon', '.latest-collections-buttons a[href="/women"]', '/women');
    },

    'it Should navigate to the STORE LOCATOR web page and back to Home page': client => {
        navigateDirectly(client, '.header-subheader-options .storelocator-accesspoints-headerlink-link-text', '.store-locator-search-group-form-controls')
    },

    'it Should navigate to the Avatar > Login web page and back to Home page': client => {
        navigateDirectly(client, '.header-profile-welcome-user-icon', '.login-register-login-form')

    },

    'it Should navigate to the CUSTOMER SERVICE page and back to the Home page': client => {
        navigateDirectly(client, '.header-customer-service', '.static-sidenav:nth-child(1) a[href="customer-service"]')
    },

    'it Should change the Language and Currency from the Settings dropdown, and assert the URL component': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            .click('.header-menu-settings-carret')
            .elements('css selector', '#languageSelector option', function (resultLanguage) {
                var countLanguage = resultLanguage.value.length;
                client.
                    elements('css selector', '#currencyselector option', function (resultCurrency) {
                        var countCurrency = resultCurrency.value.length;
                        //   console.log(countCurrency);
                        for (var i = 1; i < countLanguage + 1; i++) {
                            client.click('#languageSelector')
                                .click('#languageSelector option:nth-child(' + i + ')')
                                .getAttribute('#languageSelector option:nth-child(' + i + ')', 'value', function (languageSelected) {
                                    var urlLanguage = languageSelected.value;

                                    for (var j = 1; j < countCurrency + 1; j++) {
                                        client.click('#currencyselector')
                                            .click('#currencyselector option:nth-child(' + j + ')')
                                            .getAttribute('#currencyselector option:nth-child(' + j + ')', 'value', function (currencySelected) {
                                                var urlCurrency = currencySelected.value;
                                                client.click('.header-menu-settings-dropdown .action-link')
                                                    .pause(5000)
                                                    .assert.urlContains('lang=' + urlLanguage)
                                                    .assert.urlContains('cur=' + urlCurrency)
                                                    .click('.header-menu-settings-carret')
                                            })
                                    }
                                })
                        }
                    })
                // console.log(countLanguage);
            })
            .end();
    },

    'it Should Search for all items using the Search box, and go back to the home page': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            .click('.ditch-mobile .itemssearcher-input.typeahead.tt-input')
            .setValue('.ditch-mobile .itemssearcher-input.typeahead.tt-input', 'bo')
            .assert.elementNotPresent('.itemssearcher-item-all-results')
            .setValue('.ditch-mobile .itemssearcher-input.typeahead.tt-input', 'x')
            .assert.elementPresent('.itemssearcher-item-all-results')
            .click('.itemssearcher-item-all-results')
            .assert.urlContains(client.launchUrl + '/search?keywords=box')
            .pause(5000)
            .assert.containsText('.shopping-layout-breadcrumb:not(.sub-category-breadcrumb) .global-views-breadcrumb', 'HOME SEARCH RESULTS')
            .click('.ditch-mobile .header-logo-image')
            .getLocationInView('.newsletter-sign-up')
            .assert.elementPresent('.home-newsletter-sign-up .newsletter-subscription-form-label')
            .end();
    },

    'it Should NOT display any Search results for incorrect search keyword': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            .click('.ditch-mobile .itemssearcher-input.typeahead.tt-input')
            .setValue('.ditch-mobile .itemssearcher-input.typeahead.tt-input', '$%#')
            .assert.elementPresent('.itemssearcher-item-no-results')
            .assert.containsText('.itemssearcher-item-no-results','NO RESULTS')
            .end();
    },

    'it Should click on the Login avatar > Login/Register page, and back to the Home page':client=>{
        navigateDirectly(client,'.header-profile-welcome-user-icon','.login-register-header')
    }
}