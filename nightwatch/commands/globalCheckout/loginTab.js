module.exports = {
    command: function () {
        return this
            .waitForElementVisible(
            '.login-register-login-form-input#login-email')
            .click("#login")
    }
}