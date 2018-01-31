module.exports = {
    command: function () {
        return this
            .element('css selector', '.cookies-message', function (res) {
                if (res.value && res.value.ELEMENT) {
                    this.click('.cookies-message-cancel-btn', function () {
                        console.log('Cookies message closed');
                    })
                }
                else {
                    console.log('Cookies message NOT present');
                }
            })


    }
}