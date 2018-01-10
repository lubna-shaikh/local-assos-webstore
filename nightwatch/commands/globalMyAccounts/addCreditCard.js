const myAccount = require("./myAccount.json");

module.exports = {
    command: function () {
        return this
            // .pause(20000)
            .click('a[data-id="creditcards"]')
            .element('css selector', '.creditcard-list-button', function (res) {
                if (res.value && res.value.ELEMENT) {
                    console.log('Credit Card already present')
                }
                else {
                    this
                        .setValue('#ccname', myAccount.firstName + " " + myAccount.lastName)
                        .setValue('#ccnumber', myAccount.cardNumber)
                        .click('#expmonth')
                        .getLocationInView('option[value="10"]')
                        .click('option[value="10"]')
                        .click('#ccdefault')
                        .getLocationInView('.creditcard-edit-form-button-submit')
                        .click('.creditcard-edit-form-button-submit')
                        .waitForElementVisible('.creditcard-list-button')
                }
            })
    }
}