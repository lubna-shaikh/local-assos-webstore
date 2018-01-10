module.exports = {

  command: function(searchCriteria) {
    this
    .waitForElementVisible('input.itemssearcher-input.typeahead.tt-input')
    .setValue('input.itemssearcher-input.typeahead.tt-input',searchCriteria)
    .waitForElementVisible('div.tt-suggestion:nth-child(2) .itemssearcher-item-results-title')
    .click('div.tt-suggestion:nth-child(2) .itemssearcher-item-results-title')
    .pause(2000)
    .waitForElementVisible('.header-main-wraper')
    
  }
}
