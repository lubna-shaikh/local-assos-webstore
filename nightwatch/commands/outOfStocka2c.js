module.exports = {
    command: function (sliderContainer) {
        return this
            .getText('.header-mini-cart-menu-cart-legend', function (res) {
                var initialCount = Number(res.value);
                this
                    //  .moveToElement(sliderContainer + ' .add-to-cart-btn', 10, 10)
                    .click(sliderContainer + ' .add-to-cart-btn')
                    .pause(3000)
                    .click(sliderContainer + ' .size-options-drop-down')
                    .pause(3000)
                    //.click(sliderContainer + ' .size-options-drop-down :not(option[data-out-of-stock="true"]):last')

                    .execute(function (sliderContainer) {
                        var abc = $(sliderContainer + ' .size-options-drop-down option:not([data-out-of-stock]):last').val();
                        return abc;
                    }, [sliderContainer], function (result) {
                        console.log(result.value);
                        this.click(sliderContainer + ' .size-options-drop-down option[value="' + result.value + '"]')
                    })
                    .pause(3000)
                    .click(sliderContainer + ' .add-to-cart-btn-block')
                    .pause(5000)
                    .verify.containsText('.header-mini-cart-menu-cart-legend', initialCount + 1)
                    .end();

            })
    }
}