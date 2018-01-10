module.exports = {
  command: function (username, password, callback) {
    this
      .waitForElementVisible(
      '.login-register-login-form-input#login-email')
      .setValue('#login-email', username)
      .setValue('#login-password', password)
      .click(
      'button#button-login.login-register-login-submit.secondary-button'
      )
      .waitForElementVisible('.user-name',20000)
  },
};
