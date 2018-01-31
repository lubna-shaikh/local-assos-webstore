// var sekCurrency = "SEK";
// var sekLanguage = "en";

//var userType;

module.exports = {

    command: function (userType, expectedCurrency, expectedLanguage) {
        return this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon', function () {
                if (userType === 'transacted') {
                    console.log('Transacted User')
                    this
                        .assert.attributeEquals('#currencyselector', 'disabled', 'true')

                }

                else if (userType === 'nonTransacted' || userType === 'guest') {
                    console.log('Non-Transacted  or Guest User')
                    this
                        .assert.elementNotPresent('#currencyselector option:nth-child(2)')

                }
            })
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