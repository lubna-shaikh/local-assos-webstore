module.exports = {
    command: function () {
        this
            .waitForElementVisible('.header-mini-cart-menu-cart-legend')
            .getText('.header-mini-cart-menu-cart-legend', function (result) {
                var cartCount = Number(result.value);
                console.log('Cart Count: ',cartCount);

                if (cartCount === 0) {
                    this
                        .click('.header-mini-cart-menu-cart-icon')
                        .verify.visible('.lbl-cart-empty')
                }
                else {
                    this
                        .click('.header-mini-cart-menu-cart-icon')
                        .verify.visible('.header-mini-cart-button-view-cart')
                        .verify.visible('.checkout-securely-btn')
                }
            })
    }

}
