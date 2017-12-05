const clickandassert = function (client, buttonurl, asserturl) {
    return client

        .click(buttonurl)
        .pause(5000)
        .verify.urlEquals(asserturl)
};

module.exports = {
    'it should login': client => {
        return client
            .url("http://uat.assos.com/")
            .waitForElementVisible('.ico-user', 3000)
            //.assert.containsText('#cms-content-2-2 .bx-viewport ul li:nth-child(1) a span strong','BMC Racing')
            .click('#site-header .header-content .header-menu-profile ul li a i')
            .waitForElementVisible('#login-email', 3000)
            .setValue('#login-email', 'ritesh@paperplane.net', function () { console.log('entered email id'); })
            .setValue('#login-password', 'welcome123', function () { console.log('entered password'); })
            .getLocationInView('.login-register-login-submit.secondary-button')
            .click('.login-register-login-submit.secondary-button');
        //.end();
    },

    'it should check hover options for womens bib shorts': client => {
        client
            .url("http://uat.assos.com/women/bib-shorts")
            .waitForElementVisible('.leader-board-banner-slide', 20000)
            .pause(5000)
            //   .click('.shopping-layout-breadcrumb.sub-category-breadcrumb')
            //  .getLocationInView('a[href="/women/bib-shorts/custitem_webstore_activity/urban"]')
            .getLocationInView('.item-category-nac-title:nth-child(3)')
            .moveToElement('.item-card.row div:nth-child(1).item-block-container', 1, 1)
            .click('.item-card.row div:nth-child(1).item-block-container .add-to-cart-btn', function () { console.log("Clicked on Add to cart button") })
            .pause(5000)
            .click('.item-card.row div:nth-child(1).item-block-container .size-options-drop-down', function () { console.log("Clicked on Size options") })
            .click('.item-card.row div:nth-child(1).item-block-container .size-options-drop-down option[value="26300"]', function () { console.log("Clicked on Medium option") })
            .click('.item-card.row div:nth-child(1).item-block-container .add-to-cart-submit-btn')
            .pause(5000)
            .assert.containsText('.header-mini-cart-menu-cart-legend', '1')
            .end();

    },

    'add product -- SS SKINFOIL SPRING/FALL EVO7': client => {
        client
        .assoslogin()
        .pause(50000)
          
      //.url("http://uat.assos.com/")
      //.waitForElementVisible('.ico-user', 3000)
          .moveToElement('.row.header-main-nav-content div:nth-child(1) div nav ul li.WOMEN',0,0)
          .pause(2000)
          .click('.header-main-nav-content div:nth-child(1) nav ul li.WOMEN.open ul li ul li:nth-child(2) ul a:nth-child(3)')
          .verify.urlEquals("http://uat.assos.com/women/body-insulator")
          .pause(10000)
          .click('.product-set.facets-items-collection-view-row.wrap .col-sm-4.item-card:nth-child(3)')
          .verify.urlEquals("http://uat.assos.com/ss-skinfoil-spring-fall-s7?gender=W")
          .pause(10000)
          .click('#custcol2-container div div.custcol2-controls.product-views-option-color-container div div label span',function(){console.log("Color clicked!")})
      
          .pause(2000)     
          .setValue('#custcol1','I')
          .verify.urlEquals("http://uat.assos.com/ss-skinfoil-spring-fall-s7?quantity=1&color=31&size=107&Item%20Gender=ss-skinfoil-spring-fall-s7_Black%20Block-1-F.jpg")
          .pause(5000)
          .getLocationInView('.cart-add-to-cart-button-button')
          .click('.cart-add-to-cart-button-button',function(){console.log("Add to cart button clicked!")})
            
          .pause(10000)     
      
          //checkout process
          .click('.header-mini-cart-menu-cart-legend',function(){console.log("mini cart button clicked!")})    
          .pause(4000)
          .click('#btn-proceed-checkout',function(){console.log("Checkout button clicked!")})    
          .pause(10000)
          .verify.urlEquals("https://checkout.sandbox.netsuite.com/c.4515330/sca-dev-elbrus/checkout.ssp?cur=CHF&is=checkout&n=2&lang=en#shipping/address")
          //.click('input[type="checkbox"]', function(){console.log("Checkbox checked !")})
          .pause(5000)
          .getLocationInView('.order-wizard-shipmethod-module-option')
          .pause(4000)
          .click('.order-wizard-shipmethod-module-option:nth-child(2)',function(){console.log("Delivery Method clicked on address page")})
          .pause(7000) 
          .getLocationInView('.order-wizard-step-button-continue.secondary-button')
          .pause(4000)
          .click('.order-wizard-step-button-continue.secondary-button',function(){console.log("Continue button gets clicked on address page")})
          .pause(7000)
          .verify.urlEquals("https://checkout.sandbox.netsuite.com/c.4515330/sca-dev-elbrus/checkout.ssp?cur=GBP&is=checkout&n=2&lang=en#billing")    
          
        //  clickandassert(client, '.order-wizard-step-button-continue', 'https://checkout.sandbox.netsuite.com/c.4515330/sca-dev-elbrus/checkout.ssp?is=checkout&n=2&lang=fr_FR&cur=GBP#billing')
          .setValue('#ccsecuritycode','2345')
          .pause(4000)
      //    clickandassert(client, '.order-wizard-step-button-continue', 'https://checkout.sandbox.netsuite.com/c.4515330/sca-dev-elbrus/checkout.ssp?is=checkout&n=2&lang=fr_FR&cur=GBP#review')
          //.verify.urlEquals("https://checkout.sandbox.netsuite.com/c.4515330/sca-dev-elbrus/checkout.ssp?cur=GBP&is=checkout&n=2&lang=en#billing")    
          .click('.order-wizard-step-button-continue')    
          // clickandassert(client, '.order-wizard-step-button-continue') 
          .pause(10000)
          .getLocationInView('input[type="checkbox"]')
          .pause(3000)
          .click('input[type="checkbox"]', function(){console.log("Checkbox checked !")})
          .pause(3000)
          .click('.order-wizard-step-button-continue', function(){console.log("Order Placed !")})
      
      }
      
};