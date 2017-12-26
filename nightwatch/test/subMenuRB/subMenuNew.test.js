const navCategoriesNew = function (client, items) {
    client
        .url("https://beta.assos.com")
        .waitForElementVisible('div.row.header-main-nav-content li.NEW > a:nth-child(1)')
        .moveToElement('div.row.header-main-nav-content li.NEW > a:nth-child(1)', 0, 0)
        .pause(4000)
        .elements('css selector', items, function (result) {

            var noOfItems = result.value.length;
            console.log(noOfItems);

            for (var i = 1; i <= noOfItems; i++) {
                const itemClicked = items + ':nth-child(' + i + ')';
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
                    .waitForElementVisible('div.row.header-main-nav-content li.NEW > a:nth-child(1)')
                    .moveToElement('div.row.header-main-nav-content li.NEW > a:nth-child(1)', 0, 0)
                    .pause(4000);
            }

        })
        .end();


};



module.exports = {

    '@tags': ['new','submenu'],
    'it should validate that ALL ITEMS under NEW FOR MEN when clicked, land on desired PDP': client => {
        client
        navCategoriesNew(client, 'li.NEW.open li.menu-category-listing.menu-category-listing-men > ul > li')
    },

    'it should validate that ALL ITEMS under NEW FOR WOMEN when clicked, land on desired PDP': client => {
        client
        navCategoriesNew(client, 'li.NEW.open li.menu-category-listing.menu-category-listing-women > ul > a')
    }
}