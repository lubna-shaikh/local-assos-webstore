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
const expectFR = 'CHF';
const expectEN = 'EN';
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");
const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");


module.exports = {
    '@tags':'sweden',
    'it Should hit direct URL for Home page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + homePage)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menSubCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenSubCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + womenFacetedCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + menFacetedCategory)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + shortsStories)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + clubGear)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + beacomeADealer)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + contactUs)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
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
            .goToHomePage()
            .assertLangCurrency(expectSEK,expectFR)
           
    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + sizeGuide)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Non-logged-in users)': client => {
        client
            .url(client.launchUrl + productCare)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSEK)
            .assertLangAndCurrency('guest', expectedSEK, expectFR)
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'it Should hit direct URL for Home page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menSubCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenSubCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenFacetedCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menFacetedCategory)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .itemCurrency('pdp', subCategoryPrice, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + shortsStories)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + clubGear)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + beacomeADealer)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + contactUs)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSEK)
    },

    'it Should hit direct URL for Login page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + login)
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Forgot Password page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl + forgotPassword)
            .goToHomePage()
            .assertLangAndCurrency('nonTransacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + sizeGuide)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Logged-in, Non-transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + productCare)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSEK)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'it Should hit direct URL for Home page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .itemCurrency('pdp', homePage, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men category page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women category page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .itemCurrency('pdp', categoryItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menSubCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Jackets (Sub-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenSubCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Women > Road (Faceted-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + womenFacetedCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Men > Road (Faceted-category) page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + menFacetedCategory)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(subCategoryPrice)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .itemCurrency('pdp', subCategoryPrice, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Shorts Stories page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + shortsStories)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Club Gear form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + clubGear)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Become a Dealer form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + beacomeADealer)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Contact Us form and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + contactUs)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .assertNoCurrencyChange()
            .itemCurrency('pdp', homePage, expectSFR)
    },

    'it Should hit direct URL for Login page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + login)
            .login(transacted.email, transacted.password)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    },

    'it Should hit direct URL for Forgot Password page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl + forgotPassword)
            .goToHomePage()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
           
    },

    'it Should hit direct URL for Size Guide page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + sizeGuide)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)

    },

    'it Should hit direct URL for Product Care page and assert language + no currency change (Logged-in, Transacted users)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transacted.email, transacted.password)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .url(client.launchUrl + homePage)
            .url(client.launchUrl + productCare)
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
            .scrollToItem(productCareItem)
            .itemCurrency('pdp', productCareItem, expectSFR)
            .assertNoCurrencyChange()
            .assertLangAndCurrency('transacted', expectedSEK, expectFR)
    }
}