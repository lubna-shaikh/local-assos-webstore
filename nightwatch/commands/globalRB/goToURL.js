module.exports = {
  command: function(appendLaunchUrl,waitForElement) {
    return this
    .url(this.launchUrl + appendLaunchUrl)
    .waitForElementVisible(waitForElement)
  },
}