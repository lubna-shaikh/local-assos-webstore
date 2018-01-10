module.exports = {
    command: function (sliderContainer,jqueryItem) {
        return this
            .getText('.header-mini-cart-menu-cart-legend', function (res) {
                var initialCount = Number(res.value);
                this
                    //  .moveToElement(sliderContainer + ' .add-to-cart-btn', 10, 10)
                    .click(sliderContainer + ' .add-to-cart-btn')
                    .pause(3000)
                    .click(sliderContainer + ' .size-options-drop-down')
                    .pause(3000)

                    // .execute(function (jqueryItem) {
                    //     // var abc = [].slice.call(document.querySelectorAll('.product-set .item-block-container:nth-child(4) .item-card-image-block .size-options-drop-down option:not([data-out-of-stock])').value);

                    //     var abc = $('.product-set .item-block-container:nth-child(2) .item-card-image-block .size-options-drop-down option:not([data-out-of-stock]):last').val();



                    //     //var abc = $(jqueryItem).val();
                    //     //var abc = jqueryItem;

                    //     console.log('hi');
                    //     console.log(abc);
                    //     return abc;
                    // }, function (result) {
                    //     console.log(result.value);
                    //     this.click(sliderContainer + ' .size-options-drop-down option[value="' + result.value + '"]')
                    // })

                    .execute(function (sliderContainer,jqueryItem) {

                        // document.querySelector('.product-set .item-block-container:nth-child(1) .item-card-image-block .size-options-drop-down').click();
                        var abc = document.querySelectorAll(jqueryItem);
                        var xyz = (abc.length) - 1;
                        // var mnp = $(abc[xyz-1]).val();
                        var mnp = abc[xyz].value;
                       // console.log(mnp);
                       var pqr=sliderContainer + ' .size-options-drop-down option[value="'+mnp+'"]'
                        $(pqr).click;
                        return true;
                    }, function (result) {
                    //    console.log(result.value);
                    //     this.click(sliderContainer + ' .size-options-drop-down option[value="' + result.value + '"]')
                        // this.getAttribute(result, 'value', function (res) {
                        //     console.log(res.value);
                        //     this.click(sliderContainer + ' .size-options-drop-down option[value="' + res.value + '"]')

                        // })
                        // browser.verify.elementPresent(e[0], "Explanation...")

                    })

                    .pause(3000)
                    .click(sliderContainer + ' .add-to-cart-btn-block')
                    .pause(5000)
                    .verify.containsText('.header-mini-cart-menu-cart-legend', initialCount + 1)
                    .end();
            })
    }
}