module.exports = {
    command: function (linkCSS) {
        return this
            .getLocationInView(linkCSS, urlComponent)
            .click(linkCSS)
            .window_handles(function (result) {
                var numberOfWindows = result.value.length;
                var originalHandle = result.value[0];
                var newHandle = result.value[numberOfWindows - 1];
                this
                    .switchWindow(newHandle)
                    .assert.urlContains(urlComponent)
                    .switchWindow(originalHandle)

                //   .verify.urlContains(urlComponent);
            })
            .pause(2000)
    }
}