module.exports = {
  command: function() {
    this
    .waitForElementVisible('.header-customer-service')
    .click('.header-customer-service')
    .waitForElementVisible('.section-title')
  },
}