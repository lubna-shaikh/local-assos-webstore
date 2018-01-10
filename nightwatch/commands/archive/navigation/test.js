module.exports = {
    'test1': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('body')
            .end();
    }
}