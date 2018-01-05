const sliderContainer = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block';

const scrollToSlider = function (client, sliderContainer) {
    return client
        .pause(3000)
        //  .getLocationInView('.facets-faceted-navigation-item-category-facet-group-content')
        //  .getLocationInView('.product-set .item-block-container:nth-child(1) .item-card-image-block')
        .getLocationInView(sliderContainer)
        .pause(3000)
        .moveToElement(sliderContainer, 10, 10, function () {
            console.log("callback");
        })
        .pause(3000)
}

module.exports = {

    //Guest Checkout
    'it Should perform guest checkout from Home page slider, then register (Credit Card)': client => {
        client
            .url(client.launchUrl)
        scrollToSlider(client, sliderContainer)
        client
            .addToCart(sliderContainer)
            .checkoutCartPU()
            .guestDetails()
            .performGuestCheckout()

            .end();
    },

    'it Should perform guest checkout from Home page slider, then register (PayPal)': client => {

    },

    // 'it Should perform guest checkout from Home page slider, then register (Gift Certificate + PayPal)': client => {

    // },

    //Logged-in + Transacted user checkout

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Credit Card already present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Credit Card not present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Credit card already present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Credit card not present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address already present, Gift certficate + PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Transacted User (Address not present, Gift certificate + PayPal)': client => {

    },



    //Logged-in + Non-transacted user checkout

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Credit Card already present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Credit Card not present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Credit card already present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Credit card not present)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address already present, Gift certficate + PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, for a logged-in user - Non-transacted (Address not present, Gift certificate + PayPal)': client => {

    },



    //Logging in after clicking on Checkout from Cart page + Transacted user checkout

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Credit Card already present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Credit Card not present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Credit card already present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Credit card not present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address already present, Gift certficate + PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Transacted User (Address not present, Gift certificate + PayPal)': client => {

    },



    //Logging in after clicking on Checkout from Cart page + Non-transacted user checkout

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Credit Card already present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Credit Card not present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Credit card already present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Credit card not present)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate + Credit card)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address already present, Gift certficate + PayPal)': client => {

    },

    'it Should perform checkout from Home page slider, after logging in - Non-transacted (Address not present, Gift certificate + PayPal)': client => {

    },


    //Register then checkout

    'it Should register and checkout from Home page slider - Gift Certificate': client => {

    },

    'it Should register and checkout from Home page slider - Gift Certificate + Credit card': client => {

    },

    'it Should register and checkout from Home page slider - Gift Certificate + PayPal': client => {

    },

    'it Should register and checkout from Home page slider - Credit card': client => {

    },

    'it Should register and checkout from Home page slider -  PayPal': client => {

    },

    '': client => {

    },
}