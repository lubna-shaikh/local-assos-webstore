const myAccount = require("./myAccount.json");

module.exports = {
    command: function () {
        return this
            // .pause(20000)
            .click('a[data-id="addressbook"]')
            .element('css selector', '.address-list-button-info-cards-new.secondary-button.add-new-address', function (res) {
                if (res.value && res.value.ELEMENT) {
                    this
                        .getLocationInView('.shipping-address-container button[data-action="remove"]')
                        .click('.shipping-address-container button[data-action="remove"]')
                        .waitForElementVisible('.global-views-confirmation-confirm-button')
                        .click('.global-views-confirmation-confirm-button')
                        .verify.elementNotPresent('.address-list-button-info-cards-new.secondary-button.add-new-address')
                }
                else {
                    console.log('Address NOT present')
                }
            })
    }
}