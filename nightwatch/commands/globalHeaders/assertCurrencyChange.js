module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .verify.elementPresent('#currencyselector:not(disabled)')
            .click('.header-menu-settings-icon')

    }
}