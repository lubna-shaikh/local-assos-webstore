module.exports = {
  command: function (email, password) {
    this
      //.waitForElementVisible('.header-profile-login-link')
      .click('.header-profile-login-link')
      .waitForElementVisible('.login-register-login-form-input#login-email', 10000)
      .setValue('#login-email', email)
      .setValue('#login-password', password)
      .click('button#button-login.login-register-login-submit.secondary-button')
      .waitForElementVisible('.user-name')
  },
};
