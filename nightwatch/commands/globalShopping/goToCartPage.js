module.exports = {
    command: function () {
        return this
            .getLocationInView('.header-mini-cart-menu-cart-legend')
            .click('.header-mini-cart-menu-cart-legend')
            .click('.header-mini-cart-button-view-cart')
            .waitForElementVisible('.cart-lines-row:nth-child(1)')
    }
}