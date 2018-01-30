const subCategoryPrice = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const expectSEK = 'SEK';
const expectEN = 'EN';
const expectSFR = 'SFr.';
const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");

module.exports = {
    '@tags':'sweden',
    'it Should apply High to Low sort, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applySort('highToLow')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply High to Low sort, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applySort('lowToHigh')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply High to Low sort, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applySort('highToLow')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply High to Low sort, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .applySort('lowToHigh')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply High to Low sort, and assert language and currency - logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('guest', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applySort('highToLow')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply High to Low sort, and assert language and currency - logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('guest', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applySort('lowToHigh')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'it Should apply Seasons filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Activity filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(color)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Color filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Seasons filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Activity filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Color filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(color)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Seasons filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },

    'it Should apply Activity filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },

    'it Should apply Color filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(color)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'it Should clear Seasons filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Activity filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Color filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Seasons filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Activity filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Color filter, and assert language and currency - Logged-in user (Non-transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .applyFilter(color)
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .clearFilter()
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should clear Seasons filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(seasons)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },

    'it Should clear Activity filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(activity)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },

    'it Should clear Color filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .applyFilter(color)
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectedSFR, expectEN)
            .itemCurrency('list', subCategoryPrice, expectedSFR)
            .end()
    },

}