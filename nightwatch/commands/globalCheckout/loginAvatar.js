module.exports={
    command:function(){
        return this
        .waitForElementVisible('.header-profile-welcome-user-icon')
        .click('.header-profile-welcome-user-icon')
    }
}