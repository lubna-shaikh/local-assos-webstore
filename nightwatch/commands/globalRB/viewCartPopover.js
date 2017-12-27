module.exports = {
    command: function () {
        this
            //.waitForElementVisible('.header-mini-cart-menu-cart-legend')
            .getText('.header-mini-cart-menu-cart-legend', function (result) {
                var cartCount = Number(result.value);
                console.log(cartCount);

                if (cartCount === 0) {
                    client
                        .click('.header-mini-cart-menu-cart-icon')
                        .verify.visible('.lbl-cart-empty')
                }
                else {
                    client
                        .click('.header-mini-cart-menu-cart-icon')
                        .verify.visible('.header-mini-cart-button-view-cart')
                        .verify.visible('.checkout-securely-btn')
                }
            })
    }

}
