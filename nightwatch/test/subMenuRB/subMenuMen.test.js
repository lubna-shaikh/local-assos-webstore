
module.exports = {

    '@tags': ['men','submenu'],
    'it Should validate subcategories of EXPLORE BY RIDE under MEN': client => {
        var URLs = ["men/activity/road", "men/activity/mountain", "men/activity/urban"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(1) li:nth-child(1) > a', URLs, 1, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of EXPLORE BY SEASON under MEN': client => {
        var URLs = ["men/season/1.4-summer", "men/season/2.4-spring~fall", "men/season/3.4-early-winter", "men/season/4.4-winter"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(1) li:nth-child(2) > a', URLs, 1, 'men', 'MEN')
        .end();
    },
 
   
    'it Should validate subcategories of CLOTHING under MEN': client => {
        var URLs = ["men/bib-shorts", "men/knickers-and-tights", "men/body-insulator", "men/jerseys", "men/jackets", "men/wind-rain-shells", "men/chronosuits"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(2) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of ACCESORIES under MEN': client => {
        var URLs = ["men/caps-and-headbands", "men/warmers-and-protectors", "men/gloves", "men/socks", "men/overshoes", "men/water-bottles"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(3) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of HIGHLIGHTS under MEN': client => {
        var URLs = ["men/highlights/bmc-replica-kit", "/men/highlights/usa-cycling-replica-kit", "/men/custitem_ravi_product_color/profBlack/highlights/profblack-collection", "/men/highlights/works-team"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(4) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of CLUB GEAR under MEN': client => {
        var URLs = ["/club-gear"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(5) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of SPECIALS under MEN': client => {
        var URLs = ["/men/replica-kits", "/men/care-products", "/men/gadgets", "/men/signature"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(6) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },
 
    
    'it Should validate subcategories of COLLABORATIONS under MEN': client => {
        var URLs = ["/men/helmets", "/men/shoes", "/men/eyewear", "/men/goomah-bike"];
        client
        .navCategories(client, 'li.open ul li li:nth-child(7) ul > a', URLs, 0, 'men', 'MEN')
        .end();
    },

    'it Should validate FEATURED SECTION under MEN':client =>{

        client
        .url("http://beta.assos.com")
        .waitForElementVisible('div.row.header-main-nav-content a[data-hashtag="/men"]')
        .moveToElement('div.row.header-main-nav-content a[data-hashtag="/men"]', 0, 0)
        .assert.containsText('li.MEN.open > ul > li > ul > li:nth-child(8) > h3 > span', 'WINTER 17')
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