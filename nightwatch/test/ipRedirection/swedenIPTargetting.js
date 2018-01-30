const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");
const subCategory = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const searchResults = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const homePage = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const category = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const expectSEK = 'SEK';
const expectSFR = 'SFr.';
const homePageItem = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';

module.exports = {
    '@tags':'sweden',
    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Non-logged-in User': client => {

        client
            .url(client.launchUrl)
            .assertEN_SEK()
            .itemCurrency('pdp', homePage, expectSEK)

            .goToHomePage()
            .scrollToItem(homePageItem)
            .addToCart(homePageItem)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToCategory('.MEN')
            .scrollToItem(category)
            .addToCart(category)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToCategory('.WOMEN')
            .scrollToItem(category)
            .addToCart(category)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

           


            .goToCategory('.WOMEN')
            .assertEN_SEK()

            .itemCurrency('pdp', category, expectSEK)
            .assertEN_SEK()

            .goToCategory('.MEN')
            .assertEN_SEK()

            .itemCurrency('pdp', category, expectSEK)
            .assertEN_SEK()

            .search()
            .itemCurrency('list', searchResults, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSEK)
            .assertEN_SEK()

            .end();

    },

    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Logged-in User (Transacted)': client => {

        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .getTransactedCurrency()
            // .assertNoCurrencyChange()

            .goToHomePage()
            .assertNoCurrencyChange()

            .itemCurrency('pdp', homePage, expectSFR)
            .assertNoCurrencyChange()

            .goToCategory('.WOMEN')
            .assertNoCurrencyChange()

            .itemCurrency('pdp', category, expectSFR)
            .assertNoCurrencyChange()

            .goToCategory('.MEN')
            .assertNoCurrencyChange()

            .itemCurrency('pdp', category, expectSFR)
            .assertNoCurrencyChange()

            .search()
            .itemCurrency('list', searchResults, expectSFR)
            .assertNoCurrencyChange()

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSFR)
            .assertNoCurrencyChange()

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSFR)
            .assertNoCurrencyChange()

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSFR)
            .assertNoCurrencyChange()

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSFR)
            .assertNoCurrencyChange()

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSFR)
            .assertNoCurrencyChange()

            .end();

    },

    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Logged-in User (Non-transacted)': client => {

        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertEN_SEK()

            .goToHomePage()
            .assertEN_SEK()

            .itemCurrency('pdp', homePage, expectSEK)
            .assertEN_SEK()

            .goToCategory('.WOMEN')
            .assertEN_SEK()

            .itemCurrency('pdp', category, expectSEK)
            .assertEN_SEK()

            .goToCategory('.MEN')
            .assertEN_SEK()

            .itemCurrency('pdp', category, expectSEK)
            .assertEN_SEK()

            .search()
            .itemCurrency('list', searchResults, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertEN_SEK()

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSEK)
            .assertEN_SEK()

            .end();

    }
}