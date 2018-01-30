module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .assert.elementPresent('#currencyselector:not(disabled)')
            .click('.header-menu-settings-icon')

    }
}