
const sliderContainer = '.product-set .item-block-container:nth-child(2) .item-card-image-block';
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

    'it Should add item to cart from Women > Road': client => {
        goToSubCategoryPage(client, '/women/activity/road')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > Mountain': client => {
        goToSubCategoryPage(client, '/women/activity/mountain')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > Urban': client => {
        goToSubCategoryPage(client, '/women/activity/urban')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > 1.4 Summer': client => {
        goToSubCategoryPage(client, '/women/season/1.4-summer')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > 2.4 SPRING-FALL': client => {
        goToSubCategoryPage(client, '/women/season/2.4-spring~fall')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > 3.4 EARLY WINTER': client => {
        goToSubCategoryPage(client, '/women/season/3.4-early-winter')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > 4.4 WINTER': client => {
        goToSubCategoryPage(client, '/women/season/4.4-winter')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > Bib Shorts': client => {
        goToSubCategoryPage(client, '/women/bib-shorts')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > KNICKERS AND TIGHTS': client => {
        goToSubCategoryPage(client, '/women/knickers-and-tights')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > BODY INSULATOR': client => {
        goToSubCategoryPage(client, '/women/body-insulator')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > JERSEY': client => {
        goToSubCategoryPage(client, '/women/jerseys')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > JACKETS': client => {
        goToSubCategoryPage(client, '/women/jackets')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > WIND-RAIN SHELLS': client => {
        goToSubCategoryPage(client, '/women/wind-rain-shells')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    // 'it Should add item to cart from Women > CHRONOSUITS': client => {
    //     goToSubCategoryPage(client, '/women/chronosuits')
    //     scrollToProducts(client, sliderContainer)
    //     client.addToCart(sliderContainer)
    // },
    'it Should add item to cart from Women > CAPS AND HEADBANDS': client => {
        goToSubCategoryPage(client, '/women/caps-and-headbands')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > WARMERS - PROTECTORS': client => {
        goToSubCategoryPage(client, '/women/warmers-and-protectors')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > GLOVES': client => {
        goToSubCategoryPage(client, '/women/gloves')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > SOCKS': client => {
        goToSubCategoryPage(client, '/women/socks')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > OVERSHOES': client => {
        goToSubCategoryPage(client, '/women/overshoes')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > WATER BOTTLES': client => {
        goToSubCategoryPage(client, '/women/water-bottles')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > BMC REPLICA KIT': client => {
        goToSubCategoryPage(client, '/women/highlights/bmc-replica-kit')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > USA CYCLING REPLICA KIT': client => {
        goToSubCategoryPage(client, '/women/highlights/usa-cycling-replica-kit')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > PROFBLACK COLLECTION': client => {
        goToSubCategoryPage(client, '/women/custitem_ravi_product_color/profBlack/highlights/profblack-collection')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },

    'it Should add item to cart from Women > WORKS TEAM': client => {
        goToSubCategoryPage(client, '/women/highlights/works-team')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },


    'it Should add item to cart from Women > REPLICA KITS': client => {
        goToSubCategoryPage(client, '/women/replica-kits')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > SIGNATURE': client => {
        goToSubCategoryPage(client, '/women/signature')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > HELMETS': client => {
        goToSubCategoryPage(client, '/women/helmets')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > SHOES': client => {
        goToSubCategoryPage(client, '/women/shoes')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > EYEWEAR': client => {
        goToSubCategoryPage(client, '/women/eyewear')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },
    'it Should add item to cart from Women > GOOMAH BIKE': client => {
        goToSubCategoryPage(client, '/women/goomah-bike')
        scrollToProducts(client, sliderContainer)
        client.addToCart(sliderContainer)
    },


}