const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");
const subCategory = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const subCategoryProduct = '.product-set .item-block-container:nth-child(2) .item-card-image-block';
const searchResults = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const homePage = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const category = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const expectSEK = 'SEK';
const expectSFR = 'SFr.';
const expectCHF = 'CHF';
const expectEN = 'en';
const homePageItem = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';

module.exports = {
    '@tags': 'sweden',
    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Non-logged-in User': client => {

        client
            .url(client.launchUrl)
            .cancelCookieMessage()
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('pdp', homePage, expectSEK)

            .goToHomePage()
            .scrollToItem(homePageItem)
            .addToCart(homePageItem)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)
            // 27th of January, 2018

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

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)


            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)



            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)


            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)



            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            // 27th of January, 2018  

            .goToCategory('.WOMEN')
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .itemCurrency('pdp', category, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .goToCategory('.MEN')
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .itemCurrency('pdp', category, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .search()
            .itemCurrency('list', searchResults, expectSEK)
            .assertLangAndCurrency('guest', expectSEK, expectEN)

            .end();

    },

    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Logged-in User (Transacted)': client => {

        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            // .getTransactedCurrency()
            .assertLangAndCurrency('transacted', expectCHF, expectEN)


            // 27th of January, 2018

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)



            .goToCategory('.MEN')
            .scrollToItem(category)
            .addToCart(category)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)

            .goToCategory('.WOMEN')
            .scrollToItem(category)
            .addToCart(category)
            .goToCartPage()
            .assertCartPageCurrency(expectSFR)

            // 27th of January, 2018  

            .goToHomePage()
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .itemCurrency('pdp', homePage, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToCategory('.WOMEN')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .itemCurrency('pdp', category, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToCategory('.MEN')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .itemCurrency('pdp', category, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .search()
            .itemCurrency('list', searchResults, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSFR)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)

            .end();

    },

    'it Should Hit URL, and check for language+currency in the Settings dropdown (check this for Home, Search, Sub-category, Faceted Category, PDP) - Logged-in User (Non-transacted)': client => {

        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            // 27th of January, 2018

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
            .goToCartPage()
            .assertCartPageCurrency(expectSEK)

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .scrollToItem(subCategoryProduct)
            .addToCart(subCategoryProduct)
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

            // 27th of January, 2018  

            .goToHomePage()
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .itemCurrency('pdp', homePage, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToCategory('.WOMEN')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .itemCurrency('pdp', category, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToCategory('.MEN')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .itemCurrency('pdp', category, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .search()
            .itemCurrency('list', searchResults, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToSubCategory('category', '.MEN', '/men/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToSubCategory('category', '.WOMEN', '/women/jackets')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToSubCategory('category', '.MEN', '/men/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToSubCategory('category', '.WOMEN', '/women/activity/road')
            .itemCurrency('list', subCategory, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .goToSubCategory('new', '.NEW')
            .itemCurrency('pdp', searchResults, expectSEK)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)

            .end();

    }
}