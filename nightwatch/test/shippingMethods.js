module.exports = {
    'check Shipping': client => {
        client

            .url(client.launchUrl)
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .click('.header-profile-welcome-user-icon')
            .waitForElementVisible('.content-tabs')
            .verify.urlContains('checkout.ssp?')
            .verify.urlContains('#login-register')
            .click('#login')
            .setValue('#login-email', 'ritesh@paperplane.net')
            .setValue('#login-password', 'welcome123')
            .click(
            'button#button-login.login-register-login-submit.secondary-button'
            )
            .waitForElementVisible('.header-mini-cart-menu-cart-legend')
            .click('.header-mini-cart-menu-cart-legend')
            .click('.checkout-securely-btn')
            .pause(5000)
            .waitForElementVisible('.wizard-content .module-rendered:nth-child(2) .address-details-edit-address')
            // .click('.address-details-edit-address:first')
            .click('.wizard-content .module-rendered:nth-child(2) .address-details-edit-address')
            .pause(3000)
            .click('#in-modal-country')
            .elements('css selector', '#in-modal-country option', function (result) {
                var countCountry = result.value.length;
                for (var i = 2; i <= countCountry; i++) {
                    client
                        .click('#in-modal-country option:nth-child(' + i + ')')
                        .pause(3000)
                        //  .getText('#in-modal-country', function (res) {
                        .getText('#in-modal-country option:nth-child(' + i + ')', function (res) {
                            console.log(res.value);
                            //console.log(res.innerText);
                            var countrySelected = res.value;
                            if (countrySelected === 'United States' || countrySelected === 'Switzerland' || countrySelected === 'Australia') {
                                client
                                    .click('#state')
                                    .click('#state option:nth-child(2)')
                            }
                            // else if (countrySelected === '') {
                            //     client
                            //         .click('#country')
                            //         .getLocationInView('#country option[value="AF"]')
                            //         .click('#country option[value="AF"]')
                            // }
                            client
                                .pause(3000)
                                .setValue('#in-modal-zip', '123456789')
                                .click('.address-edit-form-button-submit.secondary-button')
                                .pause(5000)
                                .getLocationInView('.order-wizard-shipmethod-module')
                                .element('css selector', '.order-wizard-shipmethod-module-option-name', function (
                                    result
                                ) {
                                    if (result.value && result.value.ELEMENT) {
                                        client
                                            // .verify.containsText('.order-wizard-shipmethod-module-option-name', 'EXPRESS DELIVERY')
                                            // .verify.containsText('.order-wizard-shipmethod-module-option-price', 'USD')
                                            .getText('.order-wizard-shipmethod-module-option-name',function(method){
                                                console.log(method.value)
                                            })
                                            .getText('.order-wizard-shipmethod-module-option-price', function(price){
                                                console.log(price.value)
                                            })


                                    } else {
                                        console.log('No delivery method available')
                                    }
                                })
                                .getLocationInView('.wizard-content .module-rendered:nth-child(2) .address-details-edit-address')
                                .click('.wizard-content .module-rendered:nth-child(2) .address-details-edit-address')
                                .pause(3000)
                                .click('#in-modal-country')

                        })



                }
            })
            .end();


    }
}