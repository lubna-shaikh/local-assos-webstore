module.exports = {
  command: function() {
    this
   // .waitForElementVisible('.header-mini-cart-menu-cart-icon')
    .click('.header-mini-cart-menu-cart-icon')
    .click('a[title="Shop Men"]')
    .waitForElementVisible('.category-shop-by-activity')
    .verify.urlContains('/men')
    
  },
}