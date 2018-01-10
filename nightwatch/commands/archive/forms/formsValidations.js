const commonValidations = function (client,formURL, headerText) {
    return client
        .url(client.launchUrl + formURL)
        .waitForElementVisible('.ditch-mobile .header-logo-image')
        .assert.elementPresent('.breadcrumb-section')
        .assert.containsText('.section-title', headerText)
        .assert.elementPresent('.section-dediscription-holder')

        .getLocationInView('.footer-content')
        .click('.contactus-button-submit')

        .getLocationInView('.container  div h3:nth-child(3)')
        .assert.containsText('#support-firstname+p', 'please enter the first name')
        .assert.containsText('#support-lastname+p', 'please enter the last name')

        .assert.containsText('#support-phone+p', 'please enter the phone number')

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
};


const formSpecificValidations = function (client,formName) {

    if (formName === 'contactUs') {
        client
            .getLocationInView('#support-incomingmessage')
            .assert.containsText('.container  div h3:nth-child(3)', 'CONTACT DETAILS')
            .assert.containsText('label[for="country"]', 'COUNTRY *')
            // .pause(5000)
            // .elements('css selector', '#country option', function (countryResults) {
            //    var numberOfCountries = countryResults.value.length;
            //    console.log('Number of countries are: ' + numberOfCountries);
            .getValue('#country ', function (res) {
                console.log(res.value);
                var countrySelected = res.value;
                if (countrySelected === 'US' || countrySelected === 'CH' || countrySelected === 'AU') {
                    //  console.log('State dropdown should be visible');
                    client.assert.containsText('#support-custevent_webstore_crm_state+p', 'please select the state');
                }
            })

            .getLocationInView('.contactus-button-submit')
            .assert.containsText('.container  div h3:nth-child(5)', 'YOUR REQUEST')
            .assert.containsText('label[for="support-issue"]', 'HELP TOPIC *')
            .assert.containsText('label[for="support-title"]', 'SUBJECT *')
            .assert.containsText('label[for="support-incomingmessage"]', 'MESSAGE *')
            .assert.elementPresent('#support-custeventwebstore_crm_privacy')

            .assert.containsText('#support-title+p', 'please enter the subject')
            .assert.containsText('#support-incomingmessage+p', 'please enter the message')
            .assert.containsText('.privacy-wrap +p', 'please accept the privacy policy')

            .getLocationInView('.container  div h3:nth-child(3)')
            .assert.containsText('#support-email+p', 'please enter valid email address')

    }
    else if (formName === 'becomeADealer' || formName === 'clubGear') {
        client
            .getLocationInView('.container  div h3:nth-child(5)')
            .assert.containsText('.container  div h3:nth-child(5)', 'BUSINESS DETAILS')
            .assert.elementPresent('#support-privacy_policy')

            .getLocationInView('.contactus-button-submit')
            .assert.elementPresent('#support-privacy_policy')
            .assert.containsText('.privacy-wrap+p', 'please accept the privacy policy')
            //.assert.containsText('#support-privacy_policy+p', 'please accept the privacy policy')

            .assert.containsText('.container  div h3:nth-child(3)', 'CONTACT DETAILS')
            .assert.containsText('label[for="companyname"]', 'BUSINESS NAME *')
            .assert.containsText('label[for="custentity_customer_website"]', 'WEBSITE URL')
            .assert.containsText('label[for="address1"]', 'ADDRESS LINE 1 *')
            .assert.containsText('label[for="address2"]', 'ADDRESS LINE 2')
            .assert.containsText('label[for="city"]', 'CITY *')
            .assert.containsText('label[for="zipcode"]', 'POSTAL CODE *')
            .assert.containsText('label[for="country"]', 'COUNTRY *')

            .assert.containsText('#companyname+p', 'please enter the company name')
            .assert.containsText('#address1+p', 'please enter address')
            .assert.containsText('#city+p', 'please enter city')
            .assert.containsText('#zipcode+p', 'please enter postal code')
            // .assert.containsText()
            .getValue('#country ', function (res) {
                console.log(res.value);
                var countrySelected = res.value;
                if (countrySelected === 'US' || countrySelected === 'CH' || countrySelected === 'AU') {
                    console.log('State dropdown should be visible');
                    client.assert.containsText('#support-state+p', 'please select the state');
                }
            })



    }

};



const extraDetailsClubGear = function (client) {
    return client
        .getLocationInView('.container  div h3:nth-child(5)')
        .assert.containsText('label[for="custentity_number_of_members"]', 'NO. OF CLUB MEMBERS *')
        .assert.containsText('label[for="custentity_interested_to_order"]', "I'M INTERESTED TO ORDER *")
        .assert.containsText('label[for="custentity_tell_us_more"]', 'MESSAGE')
        // .assert.elementPresent('#support-privacy_policy')
        // .assert.containsText('.privacy-wrap+p', 'please accept the privacy policy')

        .assert.containsText('#custentity_number_of_members+p', 'please enter no. of club members')

        .getLocationInView('.container  div h3:nth-child(3)')
        .assert.containsText('#support-email+p', 'please enter the email address')

};

const extraDetailsBecomeADealer = function (client) {
    return client
        .getLocationInView('.container  div h3:nth-child(5)')
        .assert.containsText('label[for="custentity_clothing_brands_sold"]', 'CLOTHING BRANDS SOLD *')
        .assert.containsText('label[for="custentity_bike_brands_sold"]', 'BIKE BRANDS SOLD *')
        .assert.containsText('label[for="custentity_store_size"]', 'STORE SIZE *')
        .assert.containsText('label[for="custentity_years_in_business"]', 'YEARS IN BUSINESS *')
        .assert.containsText('label[for="custentity_esc_no_of_employees"]', 'NUMBER OF EMPLOYEES *')
        .assert.containsText('label[for="custentity_tell_us_more"]', 'TELL US MORE ABOUT YOUR BUSINESS *')
        // .assert.elementPresent('#support-privacy_policy')
        // .assert.containsText('.privacy-wrap+p', 'please accept the privacy policy')

        .assert.containsText('#custentity_clothing_brands_sold+p', 'please enter clothing brands that you sell')
        .assert.containsText('#custentity_bike_brands_sold+p', 'please enter bike brands that you sell')
        .assert.containsText('#custentity_store_size+p', 'please enter store size')
        .assert.containsText('#custentity_years_in_business+p', 'please enter years in business')
        .assert.containsText('#custentity_esc_no_of_employees+p', 'please enter number of employees')
        .assert.containsText('#support-custentity_tell_us_more+p', 'please enter business details')

        .getLocationInView('.container  div h3:nth-child(3)')
        .assert.containsText('#support-email+p', 'please enter valid email address')

};

module.exports = {
    '@tags': ['forms'],
    'it Should Verify that all the elements of Contact Us form are present and validate Error Messages': client => {
        commonValidations(client,'/contact-us', 'Contact Us')
        formSpecificValidations(client,'contactUs')
           client.end();
    },

    'it Should Verify that all the elements of Become A Dealer form are present and validate Error Messages': client => {
        
        commonValidations(client,'/become-a-dealer', 'Become A Dealer')
        formSpecificValidations(client,'becomeADealer');
        extraDetailsBecomeADealer(client);
        client.end();
    },

    'it Should Verify that all the elements of Club Gear form are present and validate Error Messages': client => {
        
        commonValidations(client,'/club-gear', 'Club Gear Order Request')
        formSpecificValidations(client,'clubGear');
        extraDetailsClubGear(client);
        client.end();
    },
}




