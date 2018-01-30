module.exports={
    command:function(categoryCSS){
        return this
        .getLocationInView('.ditch-mobile '+categoryCSS)
        .click('.ditch-mobile '+categoryCSS)
        .waitForElementVisible('.category-page-banner',10000)
    }
}