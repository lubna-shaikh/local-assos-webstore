module.exports = {
  command: function() {
    this
    .viewCartPopover()
    .click('a[title="Shop Men"]')
    .waitForElementVisible('.category-shop-by-activity')
    .verify.urlContains('/men')
    
  },
}