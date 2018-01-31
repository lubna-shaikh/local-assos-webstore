const subCategoryPrice = '.product-set .item-block-container:nth-child(2) .facets-item-cell-grid-price-text';
const expectSEK = 'SEK';
const expectEN = 'en';
const expectSFR = 'SFr.';
const expectCHF = 'CHF';
const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");

module.exports = {
    '@tags': 'sweden',
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
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applySort('highToLow')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

    'it Should apply Low to High sort, and assert language and currency - logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applySort('lowToHigh')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'it Should apply Seasons filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter('seasons')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Activity filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter('activity')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Color filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter('color')
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
            .applyFilter('seasons')
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
            .applyFilter('activity')
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
            .applyFilter('color')
            .assertLangAndCurrency('nonTransacted', expectSEK, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSEK)
            .end()
    },

    'it Should apply Seasons filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('seasons')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

    'it Should apply Activity filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('activity')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

    'it Should apply Color filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('color')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'it Should clear Seasons filter, and assert language and currency - Non-logged-in user': client => {
        client
            .url(client.launchUrl)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('guest', expectSEK, expectEN)
            .applyFilter('seasons')
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
            .applyFilter('activity')
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
            .applyFilter('color')
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
            .applyFilter('seasons')
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
            .applyFilter('activity')
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
            .applyFilter('color')
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
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('seasons')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

    'it Should clear Activity filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('activity')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

    'it Should clear Color filter, and assert language and currency - Logged-in user (Transacted)': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .goToSubCategory('category', '.MEN', '/men/jackets')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .applyFilter('color')
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .clearFilter()
            .assertLangAndCurrency('transacted', expectCHF, expectEN)
            .itemCurrency('list', subCategoryPrice, expectSFR)
            .end()
    },

}