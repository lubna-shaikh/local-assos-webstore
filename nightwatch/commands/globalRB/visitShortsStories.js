module.exports = {

  command: function() {
    this
    //.waitForElementVisible('div.row.header-main-nav-content li.ASSOS.WORLD > a:nth-child(1)')
            .click('div.row.header-main-nav-content li.Shorts.Stories > a:nth-child(1)')
            .waitForElementVisible('.bxslider .leader-board-slide-js:nth-child(2)')
    
  }
}
