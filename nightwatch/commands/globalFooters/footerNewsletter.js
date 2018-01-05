module.exports = {
    command : function () {
        return this
            .getLocationInView('#site-footer')
            .email('.site-footer .newsletter-suscription-form-input')
            .click('.site-footer #subscribe-button')
            .getLocationInView('#submit-form')
            .verify.elementPresent('#submit-form')
            .click('.full-screen-wrapper+#newsletter-modal .close-button-modal.close')
            .verify.elementPresent('#site-footer')        


    }
}