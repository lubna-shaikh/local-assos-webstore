module.exports = {
    command: function (item, urlComponent) {
        return this
            .getLocationInView('#site-footer')
            .click(item)
            .window_handles(function (result) {
                var numberOfWindows=result.value.length;
                var originalHandle = result.value[0];
                var newHandle = result.value[numberOfWindows-1];
                this
                    .switchWindow(newHandle)
                    .verify.urlContains(urlComponent)
                    .switchWindow(originalHandle)

                //   .verify.urlContains(urlComponent);
            })
            .pause(2000)
            // .window_handles(function (result) {
            //     console.log(result.value.length)

            //     var originalWindow = result.value[2];
            //     this.switchWindow(originalWindow)
            //         .verify.urlContains('https://www.assos.com/');
            // })
          //  .end();
    }
}