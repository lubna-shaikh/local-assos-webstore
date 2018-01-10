const formData = require("../formData.json")

module.exports = {
    'it Should perform footer testcases for My Accounts page': client => {
        client
            .url(client.launchUrl)
            .loginAvatar()
            .login(formData.loginId,formData.loginPassword)
            .allFooters()
            .end();
    }
}