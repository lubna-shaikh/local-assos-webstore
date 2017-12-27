module.exports = {
  command: function (username, password) {
    this
      //.waitForElementVisible('.header-profile-login-link')
      .click('.header-profile-login-link')
      .waitForElementVisible('.login-register-login-form-input#login-email', 10000)
      .setValue('#login-email', username)
      .setValue('#login-password', password)
      .click('button#button-login.login-register-login-submit.secondary-button')
      .waitForElementVisible('.user-name')
  },
};
