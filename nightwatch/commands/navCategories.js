module.exports = {

    command: function (client, subCat, URLs, nthChild, categoryName, gender) {
        this
            .url("https://beta.assos.com")
            .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
            .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0)
            .pause(1000)
            .elements('css selector', subCat, function (els) {
                console.log(els.value.length);
                for (var i = 1; i <= els.value.length; i++) {
                    var breadCrumb3, assertURL;

                    assertURL = URLs[i - 1];
                    console.log(assertURL);

                    const subCatNav = subCat + ':nth-child(' + (i + nthChild) + ')';

                    client.getText(subCatNav, function (res) {
                        breadCrumb3 = res.value;
                        console.log(breadCrumb3);
                    })
                        .perform(function (done) {
                            console.log('breadCrumb', breadCrumb3);
                            client
                                .click(subCatNav);

                            if (assertURL !== '/club-gear') {
                                client.waitForElementVisible('#facet-browse > div > div > ul > li:nth-child(1) > a')

                                    .verify.containsText('#facet-browse > div > div > ul > li:nth-child(1) > a', 'HOME')
                                    .getText('#facet-browse > div > div > ul > li:nth-child(3) > a', function (res2) {
                                        var breadcrumb2 = res2.value;
                                        client
                                            .verify.equal(breadcrumb2, gender);
                                        client
                                            .verify.containsText('#facet-browse > div > div > ul > li.global-views-breadcrumb-item-active', breadCrumb3)
                                            .verify.elementPresent('.leader-board-banner-slide', breadCrumb3)
                                    });
                            }

                            done();

                        });

                    client
                        .verify.urlContains(assertURL)

                        .getLocationInView('#site-footer')
                        .pause(2000)
                        .verify.elementPresent('#site-footer')
                        .pause(2000)
                        .back()
                        .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
                        .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0);
                }
            });
    }
};


//  if (!client.assert.urlContains('/club-gear')) {
//                                 client.waitForElementVisible('#facet-browse > div > div > ul > li:nth-child(1) > a')

//                                     .verify.containsText('#facet-browse > div > div > ul > li:nth-child(1) > a', 'HOME')
//                                     .getText('#facet-browse > div > div > ul > li:nth-child(3) > a', function (res2) {
//                                         var breadcrumb2 = res2.value;
//                                         client
//                                             .verify.equal(breadcrumb2, gender);
//                                         client
//                                             .verify.containsText('#facet-browse > div > div > ul > li.global-views-breadcrumb-item-active', breadCrumb3)
//                                         done();


//                                     });
//                             }


// =====

//  client
//                                 .click(subCatNav)
//                                 .waitForElementVisible('#facet-browse > div > div > ul > li:nth-child(1) > a')
//                                 .pause(2000)
//                                 .verify.containsText('#facet-browse > div > div > ul > li:nth-child(1) > a', 'HOME')
//                                 .getText('#facet-browse > div > div > ul > li:nth-child(3) > a', function (res2) {
//                                     var breadcrumb2 = res2.value;
//                                     client
//                                         .verify.equal(breadcrumb2, gender);
//                                     client
//                                         .verify.containsText('#facet-browse > div > div > ul > li.global-views-breadcrumb-item-active', breadCrumb3)
//                                     done();
//                                 });