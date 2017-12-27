module.exports = {
  command: function(searchCriteria) {
    this
    //.waitForElementVisible('input[data-type="search-input"]')
    .setValue('input[data-type="search-input"]',searchCriteria)
    .pause(1000)
    .click('.itemssearcher-item-all-results')
    .pause(2000)
    .waitForElementVisible('.header-main-wraper')
    .verify.urlContains('/search?keywords')
  },
}