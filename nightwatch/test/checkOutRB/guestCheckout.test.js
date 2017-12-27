const guestCheckout = require("./guestCheckout.json");

module.exports = {

    'Checking the Guest Checkout flow': function (client) {
        client
            .url("http://beta.assos.com/women/bib-shorts")
            .waitForElementVisible('.header-profile-login-link')
            .addProdSubCat()
            .click('.header-mini-cart-menu-cart-legend')
            .click('.checkout-securely-btn')
            .pause(5000)
            .click('#guest-show-view button')
            .waitForElementVisible('#guest-firstname')
            .setValue('#guest-firstname', guestCheckout.firstName)
            .setValue('#guest-lastname', guestCheckout.lastName)
            .setValue('#guest-email', guestCheckout.email)
            .click('.login-register-checkout-as-guest-submit')

            //Shipping Tab
            .waitForElementVisible('#addr1')
            .setValue('#addr1', guestCheckout.addr1)
            .setValue('#addr2', guestCheckout.addr2)
            .setValue('#city', guestCheckout.city)
            .click('#country')
            .getLocationInView('div[data-manage="shipaddress"] option[value="' + guestCheckout.countryCode + '"]')
            .click('div[data-manage="shipaddress"] option[value="' + guestCheckout.countryCode + '"]')
            .setValue('#state', guestCheckout.state)
            .setValue('#zip', guestCheckout.zipCode)
            .setValue('#phone', guestCheckout.phone)
            .click('.order-wizard-address-module-checkbox')
            .getLocationInView('.order-wizard-step-button-continue')
            .waitForElementVisible('.order-wizard-shipmethod-module-option-active')
            .execute(function () {
                abc = document.querySelector('.order-wizard-shipmethod-module-option-price').innerText;
                return abc;
            }, function (result) {
                xyz = result.value;
                console.log(xyz);

                client
                    .click('.order-wizard-step-button-continue')

                    //Payment Tab
                    .waitForElementVisible('#ccnumber')
                    .setValue('#ccnumber', guestCheckout.cardNumber)
                    .click('#expmonth')
                    .click('#expmonth option[value="' + guestCheckout.expmonth + '"]')
                    .click('#expyear')
                    .click('#expyear option[value="' + guestCheckout.expyear + '"]')
                    .setValue('#ccsecuritycode', guestCheckout.cvvNumber)
                    .click('#savecreditcard')
                    .click('.order-wizard-step-button-continue')

                    //Review Tab
                    .waitForElementVisible('div[data-view="Shipping.Address"] .sec-address-title')
                    .verify.containsText('div[data-view="Shipping.Address"] .sec-address-title', guestCheckout.firstName + ' ' + guestCheckout.lastName)
                    .verify.containsText('div[data-view="Shipping.Address"] p[data-name="addr1"]', guestCheckout.addr1)
                    .verify.containsText('div[data-view="Shipping.Address"] p[data-name="addr2"]', guestCheckout.addr2)
                    .verify.containsText('div[data-view="Shipping.Address"] span[data-name="city"]', guestCheckout.city)
                    .verify.containsText('div[data-view="Shipping.Address"] span[data-name="state"]', guestCheckout.state)
                    .verify.containsText('div[data-view="Shipping.Address"] span[data-name="zip"]', guestCheckout.zipCode)
                    //  .verify.containsText('div[data-view="Shipping.Address"] p[data-name="country"]', guestCheckout.country)

                    .verify.containsText('div[data-view="Billing.Address"] .sec-address-title', guestCheckout.firstName + ' ' + guestCheckout.lastName)
                    .verify.containsText('div[data-view="Billing.Address"] p[data-name="addr1"]', guestCheckout.addr1)
                    .verify.containsText('div[data-view="Billing.Address"] p[data-name="addr2"]', guestCheckout.addr2)
                    .verify.containsText('div[data-view="Billing.Address"] span[data-name="city"]', guestCheckout.city)
                    .verify.containsText('div[data-view="Billing.Address"] span[data-name="state"]', guestCheckout.state)
                    .verify.containsText('div[data-view="Billing.Address"] span[data-name="zip"]', guestCheckout.zipCode)

                    .verify.containsText('.order-wizard-showshipments-module-shipmethod-rate', xyz)

                    .verify.containsText('.global-views-format-payment-method-expdate', 'Expires ' + guestCheckout.expmonth + '/' + guestCheckout.expyear)


            })



    }


}