//const becomeADealerDescription1 = "Sometimes you may have a question or need information that is not on our website."

const becomeADealerDescription = "Sometimes you may have a question or need information that is not on our website. We're here to help. So, if you haven't found what you're looking for, please fill in this form and we will get back to you."

const becomeADealerThankyou = "Your support request has been received and we will contact you soon."

const clubGearDescription = "Order your custom club gear built with patented ASSOS technology and Swiss quality. We offer multiple jersey & short types, at different price points, to suit your need and budget. We will customise your outfit using your logo, pattern choice and colour selection. Go ahead and complete the form and we will get in touch with you to design your custom club gear!"

const clubGearThankyou1 = "Thank you for submitting your club gear request. An ASSOS representative will be in touch with you shortly to guide you through the design process. We look forward to welcoming you to the ASSOS family."

const Thankyou2 = "Have a good ride!"
const Thankyou3 = "ASSOS of Switzerland"

const enterCommonData = function (client, formURL) {
    client
        .url(client.launchUrl + formURL)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .getLocationInView('.container  div h3:nth-child(3)')
        .setValue('#support-firstname', 'Lubna')
        .setValue('#support-lastname', 'Shaikh')
        .setValue('#support-email', 'lubna@paperplane.net')
        .setValue('#support-phone', '1234567890')

        .getLocationInView('.container  div h3:nth-child(5)')
        .pause(3000)
}

const enterFormSpecificData = function (client, formName) {
    if (formName === 'contactUs') {
        client
            .getValue('#country ', function (res) {
                console.log(res.value);
                var countrySelected = res.value;
                if (countrySelected === 'US' || countrySelected === 'CH' || countrySelected === 'AU') {
                    //  console.log('State dropdown should be visible');
                    clientInformation.setValue('#support-custevent_webstore_crm_state', 'State')
                }
                else if (countrySelected === '') {
                    client
                        .click('#country')
                        .getLocationInView('#country option[value="AF"]')
                        .click('#country option[value="AF"]')
                }
            })
            .setValue('#support-title', 'Need Assistance')
            .setValue('#support-incomingmessage', 'Support Message')
            .click('#support-custeventwebstore_crm_privacy')
            .click('#support-custevent_webstore_crm_nl')
            .click('.contactus-button-submit')
    }

    else if (formName === 'becomeADealer' || formName === 'clubGear') {
        client
            .getValue('#country ', function (res) {
                console.log(res.value);
                var countrySelected = res.value;
                if (countrySelected === 'US' || countrySelected === 'CH' || countrySelected === 'AU') {
                    clientInformation.setValue('#support-custevent_webstore_crm_state', 'State')
                }
                else if (countrySelected === '') {
                    client
                        .click('#country')
                        .getLocationInView('#country option[value="AF"]')
                        .click('#country option[value="AF"]')
                }

                else {

                }
            })
            .setValue('#companyname', 'Business Name')
            .setValue('#address1', 'Address 1')
            .setValue('#city', 'City')
            .setValue('#zipcode', '123456')


            .getLocationInView('.contactus-button-submit')
            .pause(3000)
            .click('#support-privacy_policy')
    }

}

const thankYouMessageCG = function (client, breadcrumbText, thankyouTitle, thankyouDescription, thankyouMessage1, thankyouMessage2, thankyouMessage3) {
    client
        .waitForElementVisible('.global-views-message:not(#newsletter-message-box) .confirmation-icon')
        .getLocationInView('.global-views-breadcrumb')
        .verify.containsText('.global-views-breadcrumb', breadcrumbText)
        .verify.containsText('.support-form-holder .section-title', thankyouTitle)
        .verify.containsText('.section-dediscription-holder p', thankyouDescription)
        .verify.containsText('.global-views-message:not(#newsletter-message-box) .form-succuss-message p:nth-child(1)', thankyouMessage1)
        .verify.containsText('.global-views-message:not(#newsletter-message-box) .form-succuss-message p:nth-child(2)', thankyouMessage2)
        .verify.containsText('.global-views-message:not(#newsletter-message-box) .form-succuss-message p:nth-child(3)', thankyouMessage3)
        .verify.elementPresent('.global-views-message:not(#newsletter-message-box) .confirmation-icon')
        .verify.elementPresent('.global-views-message:not(#newsletter-message-box) .global-views-message-button')
}

const thankYouMessageCB = function (client, breadcrumbText, thankyouTitle) {
    client
        .waitForElementVisible('.global-views-message:not(#newsletter-message-box) .confirmation-icon')
        .getLocationInView('.global-views-breadcrumb')
        .verify.containsText('.global-views-breadcrumb', breadcrumbText)
        .verify.containsText('.support-form-holder .section-title', thankyouTitle)
        .verify.containsText('.section-dediscription-holder p', becomeADealerDescription)
       // .verify.containsText('.section-dediscription-holder p:nth-child(2)', becomeADealerDescription2)
        .verify.containsText('.global-views-message:not(#newsletter-message-box) .form-succuss-message', becomeADealerThankyou)
        .verify.elementPresent('.global-views-message:not(#newsletter-message-box) .confirmation-icon')
        .verify.elementPresent('.global-views-message:not(#newsletter-message-box) .global-views-message-button')
}

const privacyPolicyTab = function (client, formURL) {
    client
        .url(client.launchUrl + formURL)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .getLocationInView('.contactus-button-submit')
        .click('a[href="/privacy"].privacy-policy-checkbox-text')
        .window_handles(function (result) {
            var newHandle = result.value[1];
            this.switchWindow(newHandle)
                .verify.urlEquals(client.launchUrl + "/privacy");
        })
        .end();

}

module.exports = {
    'it Should submit the Contact Us form and display Thank you message': client => {
        enterCommonData(client, '/contact-us')
        enterFormSpecificData(client, 'contactUs')
        thankYouMessageCB(client, 'HOME CONTACT US', 'Contact Us')
        client.end();
    },

    'it Should submit the Become a Dealer form and display Thank you message': client => {
        enterCommonData(client, '/become-a-dealer')
        enterFormSpecificData(client, 'becomeADealer')
        client
            .setValue('#custentity_clothing_brands_sold', 'CLOTHING BRANDS SOLD *')
            .setValue('#custentity_bike_brands_sold', 'BIKE BRANDS SOLD *')
            .setValue('#custentity_store_size', '100')
            .setValue('#custentity_years_in_business', '10')
            .setValue('#custentity_esc_no_of_employees', '200')
            .setValue('#support-custentity_tell_us_more', 'TELL US MORE ABOUT YOUR BUSINESS *')
            .getLocationInView('.contactus-button-submit')
            .click('#custevent_webstore_crm_nl')
            .click('.contactus-button-submit')
        thankYouMessageCB(client, 'HOME BECOME A DEALER', 'Become A Dealer')
        client.end();
    },

    'it Should submit the Club Gear form and display Thank you message': client => {
        enterCommonData(client, '/club-gear')
        enterFormSpecificData(client, 'clubGear')
        client
            .setValue('#custentity_number_of_members', '200')
            .getLocationInView('.contactus-button-submit')
            .click('#support-custevent_webstore_crm_nl')
            .click('.contactus-button-submit')
        thankYouMessageCG(client, 'HOME CLUB GEAR', 'Club Gear Order Request', clubGearDescription, clubGearThankyou1, Thankyou2, Thankyou3)
        client.end();

    },

    'it Should check that Privacy Policy opens in a new tab - Contact Us form': client => {
        privacyPolicyTab(client,'/contact-us')
    },

    'it Should check that Privacy Policy opens in a new tab - Become a Dealer form': client => {
        privacyPolicyTab(client,'/become-a-dealer')
    },

    'it Should check that Privacy Policy opens in a new tab - Club Gear form': client => {
        privacyPolicyTab(client,'/club-gear')
    },

}