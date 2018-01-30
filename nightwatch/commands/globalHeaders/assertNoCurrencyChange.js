const transactedCurrency = require('./getTransactedCurrency.js')

module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .assert.attributeEquals('#currencyselector', 'disabled', 'true')
            .assert.urlContains('cur=CHF')

          //  .verify.containsText('#currencyselector option[selected]', this.getTransactedCurrency().abc)
            .click('.header-menu-settings-icon')
        //console.log('test');

    }
}