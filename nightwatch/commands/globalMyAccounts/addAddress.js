const myAccount = require("./myAccount.json");

module.exports = {
    command: function () {
        return this
           // .pause(20000)
            .click('a[data-id="addressbook"]')
            .element('css selector', '.address-list-button-info-cards-new.secondary-button.add-new-address', function (res) {
                if (res.value && res.value.ELEMENT) {
                    console.log('Address already present')
                }
                else {
                    this
                        .setValue('#fullname', myAccount.firstName + " " + myAccount.lastName)
                        .setValue('#addr1', myAccount.addr1)
                        .setValue('#addr2', myAccount.addr2)
                        .setValue('#city', myAccount.city)
                        .click('#country')
                        .getLocationInView('#country option[value="' + myAccount.countryCode + '"]')
                        .click('#country option[value="' + myAccount.countryCode + '"]')
                        .setValue('#state', myAccount.state)
                        .setValue('#zip', myAccount.zipCode)
                        .setValue('#phone', myAccount.phone)
                        .getLocationInView('#defaultshipping')
                        .click('#defaultbilling')
                        .click('#defaultshipping')
                        .click('.address-edit-form-button-submit')
                        .waitForElementVisible('.address-list-button-info-cards-new.secondary-button.add-new-address')
                }
            })
    }
}