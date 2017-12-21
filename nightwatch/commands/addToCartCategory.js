module.exports = {
    command: function (sliderContainer) {
        return this
            .getText('.header-mini-cart-menu-cart-legend', function (res) {
                var initialCount = Number(res.value);
                this
                  //  .moveToElement(sliderContainer + ' .add-to-cart-btn', 10, 10)
                    .click(sliderContainer + ' .add-to-cart-btn')
                    .pause(3000)
                    .click(sliderContainer + ' .size-options-drop-down ')
                    .pause(3000)
                    .click(sliderContainer + ' .size-options-drop-down option:nth-child(2)')
                    .pause(3000)
                    .click(sliderContainer + ' .add-to-cart-btn-block')
                    .pause(5000)
                    .verify.containsText('.header-mini-cart-menu-cart-legend', initialCount + 1)
                    .end();
            })
    }
}