const homePage = "/?lang=fr_FR&cur=EUR";
const menCategory = "/men?lang=fr_FR&cur=EUR";
const womenCategory = '/women?lang=fr_FR&cur=EUR';
const menSubCategory = '/men/bib-shorts?lang=fr_FR&cur=EUR';
const womenSubCategory = '/women/bib-shorts?lang=fr_FR&cur=EUR';
const menFacetedCategory = '/men/activity/road?lang=fr_FR&cur=EUR';
const womenFacetedCategory = '/women/activity/road?lang=fr_FR&cur=EUR';
const shortsStories = '/shorts-stories?lang=fr_FR&cur=EUR';
const clubGear = 'assos-custom?lang=fr_FR&cur=EUR';
const becomeADealer = '/become-a-dealer?lang=fr_FR&cur=EUR';
const contactUs = '/customer-service?lang=fr_FR&cur=EUR';
const login = '/sca-live-elbrus/checkout.ssp?is=login&login=T&fragment=login-register&lang=fr_FR&cur=EUR#login-register';
const forgotPassword = '/sca-live-elbrus/checkout.ssp?is=login&login=T&fragment=login-register&lang=fr_FR&cur=EUR#forgot-password';
const sizeGuide = '/size-guide?lang=fr_FR&cur=EUR';
const productCare = '/product-care?lang=fr_FR&cur=EUR';
const productCareItem = '.product-content-col:nth-child(1) p+a';
const categoryItem = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const subCategoryItem = '.product-set .item-block-container:nth-child(2) .item-card-image-block';
const subCategoryPrice = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const expectSEK = 'SEK';
const expectFR = 'fr_FR';
const expectEN = 'en';
const expectSFR = 'SFr.';
const expectCHF = 'CHF';
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");
const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");


module.exports = {
    '@tags': 'sweden',
    'it Should hit direct URL for Home page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + homePage)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menSubCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenSubCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenFacetedCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menFacetedCategory)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + shortsStories)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + clubGear)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + beacomeADealer)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + contactUs)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
    },

    // 'it Should hit direct URL for Login page and assert language + no currency change (Non-logged-in users)': client => {
    //     client
    //         .url(client.launchUrl + login)
    //         .assertLangCurrency(expectSEK,expectFR)
    //         .itemCurrency('pdp', homePage, expectSEK)
    // },

    'it Should hit direct URL for Forgot Password page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + forgotPassword)
            .pause(10000)
            .goToHomePage()
            .assertLangCurrency(expectSEK, expectFR)

    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + sizeGuide)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + productCare)
            .pause(10000)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectFR)
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'it Should hit direct URL for Home page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + homePage)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + menCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + womenCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + menSubCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menSubCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + womenSubCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenSubCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + womenFacetedCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenFacetedCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + menFacetedCategory)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menFacetedCategory)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + shortsStories)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + shortsStories)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + clubGear)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + clubGear)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + beacomeADealer)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + beacomeADealer)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + contactUs)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + contactUs)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
    },

    'it Should hit direct URL for Login page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + login)
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Forgot Password page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + forgotPassword)
            .goToHomePage()
            .assertLangAndCurrency('nonTransacted', expectSEK, expectFR)
    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + sizeGuide)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + sizeGuide)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + productCare)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + productCare)
            .assertLangAndCurrency('transacted', expectSEK, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSEK)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'it Should hit direct URL for Home page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + homePage)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .itemCurrency('pdp', homePage, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + menCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .itemCurrency('pdp', categoryItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + womenCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .itemCurrency('pdp', categoryItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + menSubCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menSubCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + womenSubCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenSubCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + womenFacetedCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenFacetedCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + menFacetedCategory)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menFacetedCategory)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + shortsStories)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + shortsStories)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + clubGear)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + clubGear)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + beacomeADealer)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + beacomeADealer)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + contactUs)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + contactUs)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .assertNoCurrencyChange()
            .itemCurrency('pdp', homePage, expectSFR)
    },

    'it Should hit direct URL for Login page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + login)
            .login(transacted.email, transacted.password)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    },

    'it Should hit direct URL for Forgot Password page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + forgotPassword)
            .goToHomePage()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)

    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + sizeGuide)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + sizeGuide)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + productCare)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + productCare)
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectCHF, expectFR)
    }
}