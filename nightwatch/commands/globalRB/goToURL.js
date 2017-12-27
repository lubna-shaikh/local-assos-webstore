module.exports = {
  command: function(appendLaunchUrl,waitForElement) {
    this
    .url(client.launchURL + appendLaunchUrl)
    .waitForElementVisible(waitForElement)
  },
}