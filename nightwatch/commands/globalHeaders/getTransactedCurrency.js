var abc="mnp";

module.exports = {

    command: function () {
         this
            .getLocationInView('.header-menu-settings-icon')
            .click('.header-menu-settings-icon')
            .verify.attributeEquals('#currencyselector', 'disabled', 'true')
            .getValue('#currencyselector option[selected]', function ab (res) {
                console.log("Transacted currency is ", res.value)
                //  abc=res.value;
                // var tc={
                //     "transactedCurrency":abc
                // }
            })
            .click('.header-menu-settings-icon')
            // console.log("assertNoCurrencyChange "+tc.transactedCurrency)
            return abc;
        //console.log('test');

    }
}