module.exports = {

    'it Should check if cart count is incremented after adding a product': client => {
        client
            .url("http://www.assos.com/women/bib-shorts")
            .waitForElementVisible('.header-mini-cart-menu-cart-legend')
            .getText('.header-mini-cart-menu-cart-legend', function (result) {
                var cartCountInitial = Number(result.value);
                console.log(cartCountInitial);
                client
                    .addProdSubCat()

                    .getText('.header-mini-cart-menu-cart-legend', function (result) {
                        var cartCountUpdated = Number(result.value);
                        client.verify.equal(cartCountUpdated,cartCountInitial+1);
                        console.log(cartCountUpdated);
                        //client.verify.containsText('.header-mini-cart-menu-cart-legend', cartCountInitial + 1)


                    })

            })
            // .addProdCart()
            // .pause(10000)
            // .getText('.header-mini-cart-menu-cart-legend', function(result){
            //     var cartCount = result.value;

            //     if(cartCount==0){
            //         client
            //         .waitForElementVisible('.header-mini-cart-menu-cart-legend')
            //        // .assert.containsText('.header-mini-cart-menu-cart-legend', cartCount);
            //         console.log(cartCount);
            //         console.log('0 count log');
            //     }

            //     else{
            //         client
            //         .waitForElementVisible('.header-mini-cart-menu-cart-legend')
            //        // .assert.containsText('.header-mini-cart-menu-cart-legend', cartCount);
            //         console.log(cartCount);
            //         console.log('0+ count log');
            //     }

            // })

            .end();

    }


}