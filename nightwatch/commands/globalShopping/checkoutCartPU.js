module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-mini-cart-menu-cart-legend')
            .click('.header-mini-cart-menu-cart-legend')
            .element('css selector', '.header-profile-welcome-user-icon', function (result) {
                if (result.value && result.value.ELEMENT) {
                    this

                        .click('#btn-proceed-checkout')
                        .waitForElementVisible('#register')
                        .verify.elementPresent('#register')
                }

                else {
                    this
                        .click('#btn-proceed-checkout')
                        .waitForElementVisible('.wizard-step-navigation-menu')
                        .verify.elementPresent('.wizard-step-navigation-menu')
                }
            })

    }
}