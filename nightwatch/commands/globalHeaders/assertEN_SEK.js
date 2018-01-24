var sekCurrency = "SEK";
var sekLanguage = "en";

module.exports = {

    command: function () {
        this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .assert.elementNotPresent('#currencyselector option:nth-child(2)')
            .getValue('#currencyselector option', function (res) {
             //   console.log("Transacted currency is ", res.value)
                var currencyReturned = res.value;
                this
                    .assert.equal(currencyReturned,sekCurrency);

            })
            .getValue('#languageSelector option:nth-child(1)', function (res) {
                var languageReturned = res.value;
                this
                    .assert.equal( languageReturned,sekLanguage);
            })
            .click('.header-menu-settings-icon')
        // console.log("assertNoCurrencyChange "+tc.transactedCurrency)
        //            return abc;
        //console.log('test');

    }
}