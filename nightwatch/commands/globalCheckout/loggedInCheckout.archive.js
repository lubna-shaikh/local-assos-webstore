const guestCheckout = require("./guestCheckout.json");


module.exports = {
    command: function (paymentType) {

        return this
            .getLocationInView('#order-wizard-address-module-checkbox')
            //  .click('#order-wizard-address-module-checkbox')
            .getLocationInView('.order-wizard-step-button-continue')
            .waitForElementVisible('.order-wizard-shipmethod-module-option')
            .click('.order-wizard-shipmethod-module-checkbox')
            // .pause(100000)
            .execute(function () {
                abc = document.querySelector('.order-wizard-shipmethod-module-option-price').innerText;
                return abc;
            }, function (result) {
                xyz = result.value;
                console.log(xyz);

                this
                    .pause(10000)
                    .getLocationInView('.order-wizard-step-button-continue')
                    .click('.order-wizard-step-button-continue')

                //Payment Tab

                if (paymentType === "CC") {

                    this
                        .waitForElementVisible('input[data-type="creditcard"]')
                        //  .pause(5000)
                        .element('css selector', 'input[data-type="creditcard"][checked="true"]', function (result) {
                            if (result.value && result.value.ELEMENT) {
                                this
                                    .getLocationInView('#ccsecuritycode')
                                    .setValue('#ccsecuritycode', guestCheckout.cvvNumber)
                                    .getLocationInView('.order-wizard-step-button-continue')
                                    .click('.order-wizard-step-button-continue')
                            }
                            else {
                                this
                                    .waitForElementVisible('#ccnumber')
                                    .setValue('#ccnumber', guestCheckout.cardNumber)
                                    .click('#expmonth')
                                    .click('#expmonth option[value="' + guestCheckout.expmonth + '"]')
                                    .click('#expyear')
                                    .click('#expyear option[value="' + guestCheckout.expyear + '"]')
                                    .setValue('#ccsecuritycode', guestCheckout.cvvNumber)
                                    .click('#savecreditcard')
                                    .click('.order-wizard-step-button-continue')

                            }
                        })

                }
                else if (paymentType === "PP") {
                    this
                        .waitForElementVisible('#ccnumber')
                        .getLocationInView('.payment-method-box:nth-child(2) .order-wizard-paymentmethod-selector-module-option')
                        .click('.payment-method-box:nth-child(2) .order-wizard-paymentmethod-selector-module-option')
                        .getLocationInView('.order-wizard-step-button-continue')
                        .click('.order-wizard-step-button-continue')
                        .waitForElementVisible('.baslLoginButtonContainer a', 20000)
                        .click('.baslLoginButtonContainer a')
                        .waitForElementVisible('#email')
                        .pause(4000)

                        .setValue('#email', 'pramodpar@hotmail.com')
                        //   .useCss()
                        .click('#btnNext')
                        .pause(4000)
                        .setValue('#password', 'foucault84')
                        .click('#btnLogin')
                        .pause(10000)
                }

                //Review Tab
                this
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
                    .verify.containsText('.global-views-format-payment-method-expdate', 'Expires ' + guestCheckout.expmonth + '/' + guestCheckout.expyear)
                    .verify.containsText('.order-wizard-showshipments-module-shipmethod-rate', xyz);




            })
    }
}