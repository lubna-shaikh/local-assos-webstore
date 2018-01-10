const guestCheckout = require("./guestCheckout.json");


module.exports = {
    command: function (paymentType) {

        return this

            .element('css selector', '#fullname', function (res) {
                if (res.value && res.value.ELEMENT) {
                    console.log('Shipping form');
                    this
                        .verify.valueContains('#fullname', guestCheckout.firstName + " " + guestCheckout.lastName)
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

                }
                else {
                    console.log('NO Shipping form');
                    this
                        .getLocationInView('#order-wizard-address-module-checkbox')
                        //  .click('#order-wizard-address-module-checkbox')
                        .getLocationInView('.order-wizard-step-button-continue')
                        .waitForElementVisible('.order-wizard-shipmethod-module-option')
                        .click('.order-wizard-shipmethod-module-checkbox')
                        
                }
            })

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
                    .pause(10000)

                //Payment Tab

                if (paymentType === "CC") {

                    this
                        .waitForElementVisible('.order-wizard-paymentmethod-giftcertificates-module-expander-head-toggle')
                        //  .pause(5000)
                        .element('css selector', '.creditcard-name', function (result) {
                            if (result.value && result.value.ELEMENT) {
                                console.log('Credit card already present');
                                this
                                    .getLocationInView('#ccsecuritycode')
                                    .setValue('#ccsecuritycode', guestCheckout.cvvNumber)
                                    .getLocationInView('.order-wizard-step-button-continue')
                                    .click('.order-wizard-step-button-continue')
                            }
                            else {
                                 console.log('Credit card NOT present');
                                this
                                    .getLocationInView('#ccnumber')
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