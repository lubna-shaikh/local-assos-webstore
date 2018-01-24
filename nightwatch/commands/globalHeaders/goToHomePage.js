module.exports={
    command:function(){
        return this
        .getLocationInView('.ditch-mobile .header-logo-image')
        .click('.ditch-mobile .header-logo-image')
        .waitForElementVisible('.leader-board-banner-container')
    }
}