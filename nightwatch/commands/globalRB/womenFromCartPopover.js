module.exports = {
  command: function() {
    this
    .viewCartPopover()
    .click('a[title="Shop Women"]')
    .waitForElementVisible('.category-shop-by-activity')
    .verify.urlContains('/women')
  },
}