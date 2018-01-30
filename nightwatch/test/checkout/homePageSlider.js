const sliderContainer = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';
const transactedLogin = require("../../commands/globalCheckout/transactedLogin.json");
const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");


const scrollToSlider = function (client, sliderContainer) {
    return client
        .pause(3000)
        //  .getLocationInView('.facets-faceted-navigation-item-category-facet-group-content')
        //  .getLocationInView('.product-set .item-block-container:nth-child(1) .item-card-image-block')
        .getLocationInView(sliderContainer)
        .pause(3000)
        .moveToElement(sliderContainer, 10, 10)
        .pause(3000)
}

module.exports = {

    //Guest Checkout - as of now, not performing registration, as not placing order
    'it Should perform guest checkout from Home page slider, then register (Credit Card)': client => {
        client
            .url(client.launchUrl)
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .checkoutCartPU()
            .guestDetails()
            // .shipping()
            .performGuestCheckout("CC")

            .end();
    },

    // 'it Should perform guest checkout from Home page slider, then register (PayPal)': client => {
    //     client
    //         .url(client.launchUrl)
    //     scrollToSlider(client, sliderContainer)
    //     client
    //         .addToCart(sliderContainer)
    //         .checkoutCartPU()
    //         .guestDetails()
    //         // .shipping()
    //         .performGuestCheckout("PP")

    //         .end();
    // },

    // 'it Should perform guest checkout from Home page slider, then register (Gift Certificate + PayPal)': client => {

    // },

    //Logged-in + Transacted user checkout (validations for currency change will be handled later)

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Credit Card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .getTransactedCurrency()
            .addAddress()
            .assertNoCurrencyChange()
            .addCreditCard()
            .assertNoCurrencyChange()
            .url(client.launchUrl)
            .assertNoCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertNoCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Credit Card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .removeAddress()
            .assertNoCurrencyChange()
            .removeCreditCard()
            .assertNoCurrencyChange()
            .url(client.launchUrl)
            .assertNoCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertNoCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Credit card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .removeAddress()
            .assertNoCurrencyChange()
            .addCreditCard()
            .assertNoCurrencyChange()
            .url(client.launchUrl)
            .assertNoCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertNoCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Credit card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .addAddress()
            .assertNoCurrencyChange()
            .removeCreditCard()
            .assertNoCurrencyChange()
            .url(client.launchUrl)
            .assertNoCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertNoCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate + PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate + PayPal)': client => {

    // },



    //Logged-in + Non-transacted user checkout

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Credit Card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .addAddress()
            .assertCurrencyChange()
            .addCreditCard()
            .assertCurrencyChange()
            .url(client.launchUrl)
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Credit Card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .removeAddress()
            .assertCurrencyChange()
            .removeCreditCard()
            .assertCurrencyChange()
            .url(client.launchUrl)
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Credit card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .removeAddress()
            .assertCurrencyChange()
            .addCreditCard()
            .assertCurrencyChange()
            .url(client.launchUrl)
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Credit card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .addAddress()
            .assertCurrencyChange()
            .removeCreditCard()
            .assertCurrencyChange()
            .url(client.launchUrl)
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loggedInCheckout('CC')
            .end();
    },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate + PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate + PayPal)': client => {

    // },



    //Logging in after clicking on Checkout from Cart page + Transacted user checkout

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Credit Card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .addAddress()
            .assertNoCurrencyChange()
            .addCreditCard()
            .assertNoCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(transactedLogin.email, transactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Credit Card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .removeAddress()
            .assertNoCurrencyChange()
            .removeCreditCard()
            .assertNoCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(transactedLogin.email, transactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Credit card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .removeAddress()
            .assertNoCurrencyChange()
            .addCreditCard()
            .assertNoCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(transactedLogin.email, transactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Credit card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(transactedLogin.email, transactedLogin.password)
            .assertNoCurrencyChange()
            .addAddress()
            .assertNoCurrencyChange()
            .removeCreditCard()
            .assertNoCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(transactedLogin.email, transactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate + PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate + PayPal)': client => {

    // },



    //Logging in after clicking on Checkout from Cart page + Non-transacted user checkout

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Credit Card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .addAddress()
            .assertCurrencyChange()
            .addCreditCard()
            .assertCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Credit Card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .removeAddress()
            .assertCurrencyChange()
            .removeCreditCard()
            .assertCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Credit card already present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .removeAddress()
            .assertCurrencyChange()
            .addCreditCard()
            .assertCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Credit card not present)': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
            .loginAvatar()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .assertCurrencyChange()
            .addAddress()
            .assertCurrencyChange()
            .removeCreditCard()
            .assertCurrencyChange()
            .logOut()
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .loginTab()
            .login(nonTransactedLogin.email, nonTransactedLogin.password)
            .loggedInCheckout('CC')
            .end();
    },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate + Credit card)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate + PayPal)': client => {

    // },

    // 'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate + PayPal)': client => {

    // },


    //Register then checkout

    // 'it Should register and checkout from Home page slider - Gift Certificate': client => {

    // },

    // 'it Should register and checkout from Home page slider - Gift Certificate + Credit card': client => {

    // },

    // 'it Should register and checkout from Home page slider - Gift Certificate + PayPal': client => {

    // },

    'it Should register at the time of checkout from Home page slider - Credit card': client => {
        client
            .url(client.launchUrl)
            .assertCurrencyChange()
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .assertCurrencyChange()
            .checkoutCartPU()
            .createAccountCheckout()
            .loggedInCheckout('CC')
            .end();
    },

    // 'it Should register and checkout from Home page slider -  PayPal': client => {

    // },

    // '': client => {

    // },
}