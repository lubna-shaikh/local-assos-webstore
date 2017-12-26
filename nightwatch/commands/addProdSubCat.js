module.exports = {
  command: function() {
    return this

//.url("http://www.assos.com/women/bib-shorts")
        .waitForElementVisible('.leader-board-banner-slide')
        .pause(10000)
            
        // .getLocationInView('.item-card row item-cms-area')
        //.getLocationInView('a[href="/women/bib-shorts/custitem_webstore_activity/mountain"]')
        .getLocationInView('#facet-browse div:nth-child(1) > .item-card-image-block')
        //.pause(5000)
        .moveToElement('#facet-browse div:nth-child(1) > .item-card-image-block',10,10)
        //.assert.visible('.item-card.row div:nth-child(2).item-block-container')
        
        //.pause(2000)
        //.waitForElementVisible('#facet-browse .wrap.clearfix > div:nth-child(1)  div.col-sm-4.add-to-cart-btn')
        .moveToElement('#facet-browse .wrap.clearfix > div:nth-child(1)  div.col-sm-4.add-to-cart-btn',10,10)
        .click('#facet-browse .wrap.clearfix > div:nth-child(1)  div.col-sm-4.add-to-cart-btn')
        .click('#facet-browse .wrap.clearfix > div:nth-child(1)  div.col-sm-4.add-to-cart-btn', function(){console.log("Clicked on Add to cart button")})
        .pause(5000)
        .click('.item-card.stop-hover-hide div.col-sm-8.add-to-cart-select',function(){console.log("Clicked on Size options")})
        //.click('.item-card.row div:nth-child(2).item-block-container .size-options-drop-down:nth-child(3)')
        .click('.item-card.stop-hover-hide div.hovor-item-options div.col-sm-8.add-to-cart-select option:nth-child(2)',function(){console.log("Clicked on XS option")})
        .pause(5000)
        .click('.item-card.stop-hover-hide div.hovor-item-options .add-to-cart-submit-btn > button')
        
        
        //.setValue('.item-card.row div:nth-child(2).item-block-container .add-to-cart-btn', ' Medium')
       .pause(5000)








//// OLD  ////

      // //.url(this.launch_url)
      // .setValue('input[data-type="search-input"]','Rally Shorts')
      // .pause(3000)
      // .click('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Gold-W.jpg?resizeid=2&resizeh=213&resizew=170"]')
      // //.getLocationInView('.btn-link.allign-right')
      // //.waitForElementVisible('.btn-link.allign-right')
      // //.click('.btn-link.allign-right')
      // //.waitForElementVisible('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Black Volkanga-M.jpg?resizeid=22&resizeh=400&resizew=320"]')
      // //.click('img[src="http://eu.dev.assos.com/Webstore Images/rally-shorts_Black Volkanga-M.jpg?resizeid=22&resizeh=400&resizew=320"]')
      // .waitForElementVisible('span[title="Blue"]')
      // .pause(2000)
      // .click('span[title="Blue"]')
      // .pause(2000)
      // .click('#custcol1')
      // .click('option[value="3"]')
      // .pause(2000)
      // .getLocationInView('button[data-type="add-to-cart"]')
      // .waitForElementVisible('.cart-add-to-cart-button-button')
      // .click('.cart-add-to-cart-button-button');

//// OLD ////      
  }
};