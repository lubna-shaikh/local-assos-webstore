// var sekCurrency = "SEK";
// var sekLanguage = "en";
var userType;

module.exports = {

    command: function (userType, expectedCurrency, expectedLanguage) {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')

        if (usertype === 'transacted') {
            this
                .assert.attributeEquals('#currencyselector', 'disabled', 'true')

        }

        else if (userType === 'nonTransacted' || userType === 'guest') {

            this
                .assert.elementNotPresent('#currencyselector option:nth-child(2)')

        }
        this
            .getValue('#currencyselector option', function (res) {
                //   console.log("Transacted currency is ", res.value)
                var currencyReturned = res.value;
                this
                    .assert.equal(currencyReturned, expectedCurrency);

            })
            .getValue('#languageSelector option:nth-child(1)', function (res) {
                var languageReturned = res.value;
                this
                    .assert.equal(languageReturned, expectedLanguage);
            })
            .click('.header-menu-settings-icon')

    }
}