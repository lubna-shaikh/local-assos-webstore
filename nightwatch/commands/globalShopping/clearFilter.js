module.exports = {
    command: function () {
        return this
            .element('css selector', '.facets-faceted-navigation-facets-clear', function (res) {
                if (res.value && res.value.ELEMENT) {
                    this
                        .click('.facets-faceted-navigation-facets-clear')
                        .pause(5000)
                    console.log('Clear filter clicked');
                }
                else {
                    console.log('Clear filter not displayed')
                }
            })
    }
}