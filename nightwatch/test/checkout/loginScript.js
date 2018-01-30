const nonTransactedLogin = require("../../commands/globalCheckout/nonTransactedLogin.json");

module.exports={
    'L0003: it Should Verify successful login for valid credentials':client=>{
        client
        .url(client.launchUrl)
        .loginAvatar()
        .login(nonTransactedLogin.email, nonTransactedLogin.password)
    },

    'L0005: Verify that CREATE A NEW ACCOUNT button redirects to the NEW tab':client=>{
        client
        .url(client.launchUrl)
        .loginAvatar()
        .goToNewTab()
    },

    
}