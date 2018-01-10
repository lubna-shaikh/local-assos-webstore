module.exports = {
  command: function (location) {
    this
      //.waitForElementVisible('.storelocator-accesspoints-headerlink-link-text')
      .click('.storelocator-accesspoints-headerlink-link-text')
      
      .waitForElementVisible('input[name="city"]')
      .pause(5000)
      .setValue('input[name="city"]', location )
      .pause(1500)
      .waitForElementVisible('.pac-item:nth-child(1)')
      .click('.pac-item:nth-child(1)')
      //.acceptAlert()
      .verify.urlContains('/stores')
      .set
  },
}