module.exports = {
    'Check offer subscription': client => {
        client
            .url("http://192.168.0.175:8132/delhi/gigs/index.php")
            .waitForElementVisible('body', 3000)
            .click('.delhi')
            .pause(3000)
            .click('.primNavGig')
            .pause(3000)
            .click('.full_month_menu')
            .pause(3000);

            var abc =  client.elements('css selector', '.eventArt', function (result) {
                 var size1=result.value;
                console.log(size1);
            });

            var def = client.elements('css selector', '.oldArt', function (result) {
                 var size2=result.value;
                console.log(size2);
            });

            const xyz= abc - def;

            console.log(xyz)

          for(var i=0;i<xyz.length;i++){
                    client.click(xyz(i));
                    }
                client
                .pause(5000)
                .end();
               
            }
            // .useXpath()
            // .click("//*[contains(concat(' ', normalize-space(@class), ' '), ' eventArt ') and not(contains(concat(' ', normalize-space(@class), ' '), ' oldArt '))]")
                
            

    }
