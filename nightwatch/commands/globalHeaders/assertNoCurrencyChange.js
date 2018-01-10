module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .verify.attributeEquals('#currencyselector', 'disabled', 'true')
            .click('.header-menu-settings-icon')

    }
}