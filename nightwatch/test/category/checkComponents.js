const checkBlocks = function (client) {

    return client
        //Check for global and menu header
        .verify.elementPresent('.header-subheader')
        .verify.elementPresent('.header-main-nav')

        //Checks for leaderboard banner and left-hand side panel
        .verify.elementPresent('.leader-board-banner-slide')
        .verify.elementPresent('.facets-faceted-navigation-item-category')
        //Checks for Activity title and activity section
        .verify.elementPresent('.category-shop-by-activity .product-set-title')
        .verify.elementPresent('.activity-listing-block')

        //Check for Video Banner section, title and description
        .getLocationInView('div:nth-child(4).content-section p')
        .verify.elementPresent('div:nth-child(4).content-section h2')
        .verify.elementPresent('div:nth-child(4).content-section p')
        .verify.elementPresent('.category-video-banner-slide-js')

        //Check for product slider section and title
        .getLocationInView('li:nth-child(1) .item-card')
        .verify.elementPresent('li:nth-child(1) .product-set-header .product-set-title')
        .verify.elementPresent('li:nth-child(1) .product-set-header .product-set-description')
        .verify.elementPresent('li:nth-child(1) .item-card')

        //Check for global footer
        .getLocationInView('.site-footer')
        .verify.elementPresent('.news-blog-slider-content')
        .verify.elementPresent('.site-footer')
        .verify.elementPresent(' div:nth-child(1) > .foot-links-block')
        .verify.elementPresent('div:nth-child(2) > .foot-links-block')
        .verify.elementPresent('.foot-rcol')
        .verify.elementPresent('.social-info')
        .verify.elementPresent('.foot-logo-ico')
        .end();
}

const goToCategoryPage = function (client, menuItem) {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        //Clicks on the menu item
        .click(menuItem)
        .pause(10000)
        .waitForElementVisible('.header-main-nav-content')
}

const sliderContainer = 'li:nth-child(1) .item-card .item-block-container:nth-child(2) .item-card-image-block '

const scrollToSlider = function (client, sliderContainer) {
    client
        .getLocationInView('li:nth-child(1) .item-card')
        .pause(3000)
        .moveToElement(sliderContainer, 10, 10, function () {
            console.log("callback");
        })
        .pause(3000)
}

module.exports = {
    'it Should verify that all components are present on the Men category page': client => {
        goToCategoryPage(client, '.ditch-mobile .MEN')
        checkBlocks(client)
    },

    'it Should verify that all components are present on the Women category page': client => {
        goToCategoryPage(client, '.ditch-mobile .WOMEN')
        checkBlocks(client)
    },

    'it Should add product to the cart, from Men > Product Slider': client => {

        goToCategoryPage(client, '.ditch-mobile .MEN')
        scrollToSlider(client, sliderContainer)
        // initialCartCount(client)
        client.addToCart(sliderContainer)
            .end();

    },
    'it Should add product to the cart, from Women > Product Slider': client => {

        goToCategoryPage(client, '.ditch-mobile .WOMEN')
        scrollToSlider(client, sliderContainer)
        // initialCartCount(client)
        client.addToCart(sliderContainer)
            .end();

    },
}