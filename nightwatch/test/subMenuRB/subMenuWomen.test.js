
module.exports = {
    '@tags': ['women','submenu'],
    'it Should validate subcategories of EXPLORE BY RIDE under WOMEN': client => {
        var URLs = ["women/activity/road", "women/activity/mountain", "women/activity/urban"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(1) li:nth-child(1) > a', URLs, 1, 'women', 'WOMEN')
        .end();
    },

    
    'it Should validate subcategories of EXPLORE BY SEASON under WOMEN': client => {
        var URLs = ["women/season/1.4-summer", "women/season/2.4-spring~fall", "women/season/3.4-early-winter", "women/season/4.4-winter"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(1) li:nth-child(2) > a', URLs, 1, 'women', 'WOMEN')
        .end();
    },

    
    'it Should validate subcategories of CLOTHING under WOMEN': client => {
        var URLs = ["women/bib-shorts", "women/knickers-and-tights", "women/body-insulator", "women/jerseys", "women/jackets", "women/wind-rain-shells", "women/chronosuits"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(2) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    },

   
    'it Should validate subcategories of ACCESORIES under WOMEN': client => {
        var URLs = ["women/caps-and-headbands", "women/warmers-and-protectors", "women/gloves", "women/socks", "women/overshoes", "women/water-bottles"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(3) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    },

   
    'it Should validate subcategories of HIGHLIGHTS under WOMEN': client => {
        var URLs = ["women/highlights/bmc-replica-kit", "/women/highlights/usa-cycling-replica-kit", "/women/custitem_ravi_product_color/profBlack/highlights/profblack-collection", "/women/highlights/works-team"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(4) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    },

 
    'it Should validate subcategories of CLUB GEAR under WOMEN': client => {
        var URLs = ["/club-gear"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(5) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    },

  
    'it Should validate subcategories of SPECIALS under WOMEN': client => {
        var URLs = ["/women/replica-kits", "/women/care-products", "/women/gadgets", "/women/signature"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(6) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    },

    
    'it Should validate subcategories of COLLABORATIONS under WOMEN': client => {
        var URLs = ["/women/helmets", "/women/shoes", "/women/eyewear", "/women/goomah-bike"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(7) ul > a', URLs, 0, 'women', 'WOMEN')
        .end();
    }, 
    
    'it Should validate FEATURED SECTION under WOMEN':client =>{

        client
        .url("http://beta.assos.com")
        .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/women"]')
        .moveToElement('div.row.header-main-nav-content a[data-hashtag="/women"]', 0, 0)
        .assert.containsText('li.WOMEN.open > ul > li > ul > li:nth-child(8) > h3 > span', 'WINTER 17')
        .end();
    }

}

// const navCategoriesMen = function (client, subCat, URLs, nthChild, categoryName, gender) {
//     client
//         .url("http://beta.assos.com")
//         .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
//         .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0)
//         .pause(1000)
//         .elements('css selector', subCat, function (els) {
//             console.log(els.value.length);
//             for (var i = 1; i <= els.value.length; i++) {
//                 var breadCrumb3, assertURL;

//                 assertURL = URLs[i - 1];
//                 console.log(assertURL);

//                 const subCatNav = subCat + ':nth-child(' + (i + nthChild) + ')';

//                 client.getText(subCatNav, function (res) {
//                     breadCrumb3 = res.value;
//                     console.log(breadCrumb3);
//                 })
//                     .perform(function (done) {
//                         console.log('breadCrumb', breadCrumb3);
//                         client
//                             .click(subCatNav)
//                             .waitForElementVisible('#facet-browse > div > div > ul > li:nth-child(1) > a')
//                             .pause(2000)
//                             .verify.containsText('#facet-browse > div > div > ul > li:nth-child(1) > a', 'HOME')
//                             .getText('#facet-browse > div > div > ul > li:nth-child(3) > a', function (res2) {
//                                 var breadcrumb2 = res2.value;
//                                 client
//                                     .assert.equal(breadcrumb2, gender);
//                                 client
//                                     .assert.containsText('#facet-browse > div > div > ul > li.global-views-breadcrumb-item-active', breadCrumb3)
//                                 done();
//                             });


//                     });

//                 client
//                     .assert.urlContains(assertURL)
//                     .verify.elementPresent('.leader-board-banner-slide', breadCrumb3)
//                     .getLocationInView('#site-footer')
//                     .pause(2000)
//                     .assert.elementPresent('#site-footer')
//                     .pause(2000)
//                     .back()
//                     .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]')
//                     .moveToElement('div.row.header-main-nav-content a[data-hashtag="/' + categoryName + '"]', 0, 0);
//             }
//         });
// }

