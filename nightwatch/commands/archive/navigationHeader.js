const clickTab = function (client, tab, urlComponent) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .click(tab)
        .waitForElementVisible('.header-main-nav-content')
        .assert.urlContains(urlComponent)
        .pause(10000)
        .click('.ditch-mobile .header-logo-image')
        .assert.urlEquals('http://uat.assos.com/')
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
        .assert.urlEquals('http://uat.assos.com/')
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
        .assert.urlEquals('http://uat.assos.com/')
        .end();
}

const navigateDirectly = function (client, item, urlComponent, expectedURL) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.header-main-nav-content')
        .click(item)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .assert.urlContains(urlComponent)
        .pause(10000)
        .click('.ditch-mobile .header-logo-image')
        .assert.urlContains("/?cur=")
        .assert.urlContains("&lang=")
        .end();
}


module.exports = {
    'it Should navigate to the Men web page and back to Home page': client => {
        clickTab(client, '.ditch-mobile .MEN', '/men');
    },

    'it Should navigate to the Women web page and back to Home page': client => {
        clickTab(client, '.ditch-mobile .WOMEN', '/women');
    },

    'it Should navigate to the New > Men Promo item web page and back to Home page': client => {
        hoverAndClick(client, '.ditch-mobile .NEW', '.ditch-mobile a[href^="men/"].menu-promo-content-block', '&gender=M');
    },

    'it Should navigate to the New > Women Promo item web page and back to Home page': client => {
        hoverAndClick(client, '.ditch-mobile .NEW', '.ditch-mobile a[href^="women/"].menu-promo-content-block', '&gender=W');
    },

    'it Should navigate to the Cart > SHOP MEN web page and back to Home page': client => {
        selectAndClick(client, '.header-mini-cart-menu-cart-icon', '.latest-collections-buttons a[href="/men"]', '/men');
    },

    'it Should navigate to the Cart > SHOP WOMEN web page and back to Home page': client => {
        selectAndClick(client, '.header-mini-cart-menu-cart-icon', '.latest-collections-buttons a[href="/women"]', '/women');
    },

    'it Should navigate to the Avatar > Login web page and back to Home page': client => {
       navigateDirectly(client, '.header-profile-welcome-user-icon', 'login-register', 'http://uat.assos.com/?cur=CHF&lang=en');
    },

    // 'it Should navigate to the Store Locator web page and back to Home page': client => {
    //     navigateDirectly(client, '.header-subheader-options .storelocator-accesspoints-headerlink-link-text', 'storelocator', 'http://uat.assos.com/?cur=CHF&lang=en');
    //  },
}