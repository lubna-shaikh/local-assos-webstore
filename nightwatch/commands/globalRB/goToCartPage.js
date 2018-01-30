module.exports = {
  command: function() {
    this
    .waitForElementVisible('.header-mini-cart-menu-cart-icon')
    .click('.header-mini-cart-menu-cart-icon')
    .click('.header-mini-cart-button-view-cart')
    .waitForElementVisible('.cart-detailed-header .checkout-securely-btn')
  }
}