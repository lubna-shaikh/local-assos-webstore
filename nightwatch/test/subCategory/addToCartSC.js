
const sliderContainer = '.product-set .item-block-container:nth-child(4) .item-card-image-block';
const goToSubCategoryPage = function (client, subCategoryItem) {
    return client
        .url(client.launchUrl + subCategoryItem)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
    //Clicks on the menu item
}

const scrollToProducts = function (client, sliderContainer) {
    return client
        .pause(3000)
        //  .getLocationInView('.facets-faceted-navigation-item-category-facet-group-content')
        //  .getLocationInView('.product-set .item-block-container:nth-child(1) .item-card-image-block')
        .getLocationInView(sliderContainer)
        .pause(3000)
        .moveToElement(sliderContainer, 10, 10, function () {
            console.log("callback");
        })
        .pause(3000)
}

//const sliderContainer = '.product-set .item-block-container:nth-child(1) .item-card-image-block'
module.exports = {

    'it Should add item to cart from Men > Road': client => {
        goToSubCategoryPage(client, '/men/activity/road')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > Mountain': client => {
        goToSubCategoryPage(client, '/men/activity/mountain')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > Urban': client => {
        goToSubCategoryPage(client, '/men/activity/urban')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > 1.4 Summer': client => {
        goToSubCategoryPage(client, '/men/season/1.4-summer')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > 2.4 SPRING-FALL': client => {
        goToSubCategoryPage(client, '/men/season/2.4-spring~fall')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > 3.4 EARLY WINTER': client => {
        goToSubCategoryPage(client, '/men/season/3.4-early-winter')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > 4.4 WINTER': client => {
        goToSubCategoryPage(client, '/men/season/4.4-winter')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > Bib Shorts': client => {
        goToSubCategoryPage(client, '/men/bib-shorts')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > KNICKERS AND TIGHTS': client => {
        goToSubCategoryPage(client, '/men/knickers-and-tights')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > BODY INSULATOR': client => {
        goToSubCategoryPage(client, '/men/body-insulator')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > JERSEY': client => {
        goToSubCategoryPage(client, '/men/jerseys')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > JACKETS': client => {
        goToSubCategoryPage(client, '/men/jackets')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > WIND-RAIN SHELLS': client => {
        goToSubCategoryPage(client, '/men/wind-rain-shells')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > CHRONOSUITS': client => {
        goToSubCategoryPage(client, '/men/chronosuits')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > CAPS AND HEADBANDS': client => {
        goToSubCategoryPage(client, '/men/caps-and-headbands')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > WARMERS - PROTECTORS': client => {
        goToSubCategoryPage(client, '/men/warmers-and-protectors')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > GLOVES': client => {
        goToSubCategoryPage(client, '/men/gloves')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > SOCKS': client => {
        goToSubCategoryPage(client, '/men/socks')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > OVERSHOES': client => {
        goToSubCategoryPage(client, '/men/overshoes')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > WATER BOTTLES': client => {
        goToSubCategoryPage(client, '/men/water-bottles')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > BMC REPLICA KIT': client => {
        goToSubCategoryPage(client, '/men/highlights/bmc-replica-kit')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > USA CYCLING REPLICA KIT': client => {
        goToSubCategoryPage(client, '/men/highlights/usa-cycling-replica-kit')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > PROFBLACK COLLECTION': client => {
        goToSubCategoryPage(client, '/men/custitem_ravi_product_color/profBlack/highlights/profblack-collection')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },

    'it Should add item to cart from Men > WORKS TEAM': client => {
        goToSubCategoryPage(client, '/men/highlights/works-team')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },


    'it Should add item to cart from Men > REPLICA KITS': client => {
        goToSubCategoryPage(client, '/men/replica-kits')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > SIGNATURE': client => {
        goToSubCategoryPage(client, '/men/signature')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > HELMETS': client => {
        goToSubCategoryPage(client, '/men/helmets')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > SHOES': client => {
        goToSubCategoryPage(client, '/men/eyewear')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > EYEWEAR': client => {
        goToSubCategoryPage(client, '/men/activity/road')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },
    'it Should add item to cart from Men > GOOMAH BIKE': client => {
        goToSubCategoryPage(client, '/men/goomah-bike')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },



    'it Should add item to cart from Women > Bib Shorts': client => {
        goToSubCategoryPage(client, '/women/bib-shorts')
        scrollToProducts(client, sliderContainer)
        client.a2c(sliderContainer)
    },


}