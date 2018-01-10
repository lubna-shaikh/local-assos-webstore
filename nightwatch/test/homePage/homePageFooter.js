module.exports = {
    'it Should perform footer testcases for Home page': client => {
        client
            .url(client.launchUrl)

            .allFooters()

            .end();
    }
}