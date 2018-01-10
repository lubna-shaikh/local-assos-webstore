module.exports = {
    command: function () {
        this
            .waitForElementVisible('ul.clearfix.bxslider')
            .getLocationInView('ul.clearfix.bxslider')
            .pause(10000)

            .elements('css selector', '.image-gallery-slide-js img', function (result) {
                var noOfSliders = result.value.length - 2;
                console.log('No. of images: ',noOfSliders);

                for(var i = 2; i <= noOfSliders+1;i++){

                this
                    .getAttribute('.image-gallery-slide-js:nth-child('+ i +') img', 'src', function (result) {
                        var imgSrc = result.value;
                        console.log('Image Path: ',imgSrc);

                        this
                        
                        .click('.assos-image-gallary .bx-next')
                        .pause(1500)
                    })
                    

                }

            })
            .end()



    },
}