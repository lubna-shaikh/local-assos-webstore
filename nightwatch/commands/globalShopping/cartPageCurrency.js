module.exports = {

    command: function (expectedCurrency) {
        return this
            .elements('css selector', '.cart-lines-row', function (res) {
                var itemCount = res.value.length;
                for (var i = 0; i <= itemCount; i++) {
                    this
                        .assert.containsText('.cart-lines-row:nth-child(' + i + ') .transaction-line-views-price-exact', expectedCurrency)

                }
            })
    }
}