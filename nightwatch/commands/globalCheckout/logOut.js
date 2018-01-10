module.exports={
    command:function(){
        return this
        .getLocationInView('.header-profile-welcome-link')
        .click('.header-profile-welcome-link')
        .click('#logout')
        .waitForElementVisible('.header-profile-welcome-user-icon')
    }
}