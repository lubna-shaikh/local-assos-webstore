//const formData = require("../../test/formData.json")
const guestCheckout = require("./guestCheckout.json");

module.exports = {
    command: function () {
        return this
            .click('#guest-show-view button')
            .waitForElementVisible('#guest-firstname')
            .setValue('#guest-firstname', guestCheckout.firstName)
            .setValue('#guest-lastname', guestCheckout.lastName)
            .email('#guest-email')
            .click('.login-register-checkout-as-guest-submit')
            .waitForElementVisible(' #fullname')
            .verify.elementPresent('.wizard-step-navigation-menu')

    }
}