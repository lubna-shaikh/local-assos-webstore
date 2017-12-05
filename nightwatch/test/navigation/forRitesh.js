module.exports = {
    'Category': client => {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.header-main-nav-content')
            .moveToElement('.ditch-mobile .MEN', 1, 1)
            .elements('css selector', '.ditch-mobile .MEN .header-menu-level2 li:nth-child(1) .header-menu-level3 a', function (result) {
                // console.log(result.value.length)
                var count = result.value.length;

                for (i = 1; i < count; i++) {
                    client.getText('.ditch-mobile .MEN .header-menu-level2 li:nth-child(1) .header-menu-level3 a:nth-child(' + i + ')', function (res) {
                        //console.log(res.value);
                        var name = res.value;
                        console.log(name);
                        client
                            .click('.ditch-mobile .MEN .header-menu-level2 li:nth-child(1) .header-menu-level3 a:nth-child(' + i + ')')
                            .click('.ditch-mobile .header-logo-image')
                            .pause(3000)
                            .waitForElementVisible('.header-main-nav-content')
                            .moveToElement('.ditch-mobile .MEN', 1, 1)
                            .pause(3000);
                    });

                }
            })

            // .click(promItem)
            // .waitForElementVisible('.header-main-nav-content')
            // .assert.urlContains(urlComponent)
            // .click('.ditch-mobile .header-logo-image')
            // .assert.urlEquals('http://uat.assos.com/')
            //.end();
    }
}