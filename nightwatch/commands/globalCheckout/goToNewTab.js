module.exports={
    command:function(){
        return this
        .waitForElementVisible('#login-button')
        .click('#login-button')
        .assert.elementPresent('#register-firstname')
    }
}