const goToSubcategory = function (client, categoryName, subCat, nthChild) {
    client
        .url('http://www.assos.com')
        .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
        .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0)
        .pause(1000)
        .elements('css selector', subCat, function (els) {
            console.log(els.value.length);
            for (var i = 1; i <= els.value.length; i++) {
                var breadCrumb3;
                const subCatNav = subCat + ':nth-child(' + (i + nthChild) + ')';
                client
                    .getText(subCatNav, function (res) {
                        breadCrumb3 = res.value;
                        console.log(breadCrumb3);
                    })
                    .click(subCatNav)
                    .pause(10000);

                    client
                    .getLocationInView('#site-footer')
             
               // for (var j = 0; j < 10; j++) {
                    client
                        .element('css selector', 'p.hang-on-loading[style*="display: block"]', function (result) {
                            console.log('abc');


                            for (var j = 0; j < 5; j++) {

                            if (result.value && result.value.ELEMENT && result.status === 0) {
                                //console.log('xyz');
                                client
                                    .pause(5000)

                                    .getLocationInView('#site-footer')
                                   
                                    .pause(2000)

                            }

                            else if (result.status === -1) {
                               break;
                            }
                            }
                        })
               // }

                client
                    .pause(5000)

                    .execute(function (selector) {
                        var noOfItems = document.querySelector('.facets-facet-browse-items').childElementCount;
                        // var noOfProd= document.querySelector(".facets-faceted-navigation-results").innerHTML;
                        return noOfItems;
                        // return noOfProd;

                    }, function (result) {
                        console.log('Number of Products in ' + breadCrumb3 + ':', result.value)
                    })
                    .pause(5000)
                    .getLocationInView('#site-footer')
                    .back()
                    .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
                    .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0);
            }
        })
        .end();
}



module.exports = {

    '@tags': ['productCount'],

    'it should COUNT products in EXPLORE BY RIDE under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(1) li:nth-child(1) > a', 1)
    },

    'it should COUNT products in EXPLORE BY SEASON under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(1) li:nth-child(2) > a', 1)
    },


    'it should COUNT products in CLOTHING under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(2) ul > a', 0)
    },


    'it should COUNT products in ACCESORIES under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(3) ul > a', 0)
    },


    'it should COUNT products in HIGHLIGHTS under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(4) ul > a', 0)
    },


    'it should COUNT products in SPECIALS under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(6) ul > a', 0)
    },


    'it should COUNT products in COLLABORATIONS under MEN': client => {
        goToSubcategory(client, 'men', 'li.open ul li li:nth-child(7) ul > a', 0)
    }
    //goToSubcategory(client, 'men', 'li.open ul li li:nth-child(1) li:nth-child(2) > a', 0);
}