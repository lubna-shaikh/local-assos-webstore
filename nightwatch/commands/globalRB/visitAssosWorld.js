// for ASSOS IN THE PELOTON ==> partnershipPages = '.ASSOS.open .menu-category-listing-men li' 
// for ASSOS DNA ===> partnershipPages ='.ASSOS.open .menu-category-listing-women a'

module.exports = {
    command: function (partnershipPages) {
        this
            //.waitForElementVisible('div.row.header-main-nav-content li.ASSOS.WORLD > a:nth-child(1)')
            .moveToElement('div.row.header-main-nav-content li.ASSOS.WORLD > a:nth-child(1)', 0, 0)
            .pause(4000)
            .elements('css selector', partnershipPages, function (result) {

                var noOfItems = result.value.length;
                console.log(noOfItems);

                for (var i = 1; i <= noOfItems; i++) {
                    const itemClicked = partnershipPages + ':nth-child(' + i + ')';
                    client.getText(itemClicked, function (res) {
                        console.log(res.value);
                        var itemName = res.value;
                        client
                            .click(itemClicked)
                            .pause(5000)
                            .verify.containsText('li.global-views-breadcrumb-item-active', itemName)
                            .verify.containsText('div.product-details-full-content-header > h1', itemName)


                    })
                        .back()
                        .waitForElementVisible('div.row.header-main-nav-content li.ASSOS.WORLD > a:nth-child(1)')
                        .moveToElement('div.row.header-main-nav-content li.ASSOS.WORLD > a:nth-child(1)', 0, 0)
                        .pause(4000);
                }

            })

    },
}