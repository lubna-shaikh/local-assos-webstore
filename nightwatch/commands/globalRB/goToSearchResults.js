module.exports = {
  command: function(searchCriteria) {
    this
    .waitForElementVisible('input.itemssearcher-input.typeahead.tt-input')
    .setValue('input.itemssearcher-input.typeahead.tt-input',searchCriteria)
    .pause(1000)
    .click('.itemssearcher-item-all-results')
    .pause(2000)
    .waitForElementVisible('.header-main-wraper')
    .verify.urlContains('/search?keywords')
  },
}