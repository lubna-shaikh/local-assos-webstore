const guestCheckout = require("./guestCheckout.json");

module.exports = {
    command: function () {
        return this
            .waitForElementVisible(
            '#register-show-view')
            .click("#register-show-view button")
            .setValue('#register-firstname', guestCheckout.firstName)
            .setValue('#register-lastname', guestCheckout.lastName)
            .email('#register-email')
            .setValue('#register-password', guestCheckout.password)
            .setValue('#register-password2', guestCheckout.confirmPassword)
            .getLocationInView('#submit-button')
            .click('#custentity_webstore_terms_condition')
            .click('#submit-button')
            .waitForElementVisible(' #fullname', 20000)
            .verify.elementPresent('.wizard-step-navigation-menu')
    }
}