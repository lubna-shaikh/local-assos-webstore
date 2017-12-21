const formData = require("../formData.json")

const goToRegistrationPage = function (client) {
    client
        .url(client.launchUrl)
        .click('.header-profile-welcome-user-icon')
        .waitForElementVisible('.content-tabs')
        .verify.urlContains('checkout.ssp?')
        .verify.urlContains('#login-register')
        .click('#register')
}

module.exports = {
    'it Should Submit the registration form': client => {
        //  console.log(pqr);
        goToRegistrationPage(client)
        client
            .setValue('#register-firstname', formData.firstName)
            .setValue('#register-lastname', formData.lastName)
            .email('#register-email')
            .setValue('#register-password', formData.password)
            .setValue('#register-password2', formData.confirmPassword)
            .getLocationInView('#submit-button')
            .click('#custentity_webstore_terms_condition')
            .click('#submit-button')
            .waitForElementVisible('.user-name', 20000)
            .verify.containsText('.user-name', formData.firstName)
            .verify.urlContains('my_account.ssp?')
            .end();
    },

    'it Should check for validation error messages on the Registration form': client => {
        goToRegistrationPage(client)
        client
            .getLocationInView('#submit-button')
            .click('#submit-button')
            .verify.containsText('#register-firstname+p','first name is required')
            .verify.containsText('#register-lastname+p','last name is required')
            .verify.containsText('#register-email+p','valid email is required')
            .verify.containsText('#register-password+p','please enter a valid password')
            .verify.containsText('#register-password2+p','confirm password is required')
            .verify.containsText('#custentity_webstore_terms_condition+p','please accept the terms & conditions')
            .end();
    }
}