module.exports = {
    command: function (formURL, headerText) {
        return this
            .url(this.launchUrl + formURL)
            .waitForElementVisible('.ditch-mobile .header-logo-image')
            .assert.elementPresent('.breadcrumb-section')
            .assert.containsText('.section-title', headerText)
            .assert.elementPresent('.section-dediscription-holder')

            .getLocationInView('.footer-content')
            .click('.contactus-button-submit')

            .getLocationInView('.container  div h3:nth-child(3)')
            .assert.containsText('#support-firstname+p','please enter the first name')
            .assert.containsText('#support-lastname+p','please enter the last name')
            
            .assert.containsText('#support-phone+p','please enter the phone number')
            
            //.getLocationInView('.container  div h3:nth-child(3)')
            .assert.containsText('.container  div h3:nth-child(1)', 'PERSONAL DETAILS')
            .assert.containsText('label[for="support-firstname"]', 'FIRST NAME *')
            .assert.containsText('label[for="support-lastname"]', 'LAST NAME *')
            .assert.containsText('.support-form-gender-label', 'GENDER *')
            .assert.containsText('.input-holder-main-gender .radio-checkbox:nth-child(1)', 'MAN')
            .assert.containsText('.input-holder-main-gender .radio-checkbox:nth-child(2)', 'WOMAN')
            .assert.containsText('label[for="support-email"]', 'EMAIL *')
            .assert.containsText('label[for="support-phone"]', 'PHONE NUMBER *')
            .getLocationInView('.footer-content')
            .assert.elementPresent('#support-custevent_webstore_crm_nl')

            .assert.containsText('.contactus-button-submit', 'SUBMIT REQUEST')


    }

}

