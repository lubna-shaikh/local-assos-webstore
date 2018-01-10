const myAccount = require("./myAccount.json");

module.exports = {
    command: function () {
        return this
            // .pause(20000)
            .click('a[data-id="creditcards"]')
            .element('css selector', '.creditcard-list-button', function (res) {
                if (res.value && res.value.ELEMENT) {
                    this
                    .click('.creditcard-edit-form-button-remove')
                    .waitForElementVisible('.global-views-confirmation-confirm-button')
                    .click('.global-views-confirmation-confirm-button')
                    .verify.elementNotPresent('.creditcard-list-button')
                }
                else {
                    console.log('Credit Card NOT present')
                }
            })
    }
}