var itemType;
module.exports = {
    command: function (itemType, productSetClass, expectedCurrency) {

        if (itemType === 'list') {
            console.log('List Item');
            return this
                .pause(3000)
                .getLocationInView(productSetClass)
                .pause(3000)
                .assert.containsText(productSetClass, expectedCurrency)
                .pause(3000)
        }
        else if (itemType === 'pdp') {
            console.log('PDP Item');
            return this
                .element('css selector', '.facets-item-cell-grid-price-text', function (res) {
                    if (res.value && res.value.ELEMENT) {
                        this
                            .getLocationInView('.facets-item-cell-grid-price-text')
                            .assert.containsText('.facets-item-cell-grid-price-text', expectedCurrency)
                    }
                    else {
                        this
                            .pause(5000)
                            .getLocationInView(productSetClass)
                            .click(productSetClass)
                            .waitForElementVisible('.facets-item-cell-grid-price-text')
                            .assert.containsText('.facets-item-cell-grid-price-text', expectedCurrency)

                    }
                })

        }

    }
}