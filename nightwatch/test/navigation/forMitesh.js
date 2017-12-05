module.exports = {
    'Check offer subscription': client => {
        client
            .url("http://192.168.0.175:8132/delhi/gigs/index.php")
            //.url('http://www.kittysu.com')
            .waitForElementVisible('body', 3000)
            .click('.delhi')
            .pause(3000)
            .click('.primNavGig')
            .pause(3000)
            .click('.full_month_menu')
            .pause(3000)
           // .useXpath()
            //.click("//*[contains(@class, 'eventArt') and not(contains(@class, 'oldArt'))]")
           
          client.elements('css selector','.eventArt:not(.oldArt)',function(result){
               
                var size=result.value.length;
                console.log(size);
                client.click('.eventArt:not(.oldArt)')

               

           

            })
           

           
            client

            .pause(10000)

            .end();

    }
}



