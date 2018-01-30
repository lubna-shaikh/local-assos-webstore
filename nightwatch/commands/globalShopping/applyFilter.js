var filterType;

module.exports = {
    command: function (filterType) {
        return this
            .getLocationInView('.facets-faceted-navigation-item-category')

        if (filterType === 'seasons') {
            this
                .element('css selector', 'a[title="Seasons"]+a+div select', function (res) {
                    if (res.value && res.value.ELEMENT) {
                        this
                            .click('a[title="Seasons"]+a+div select option:nth-child(2)')
                            .pause(5000)
                    }
                })
        }

        else if (filterType === 'activity') {
            this
                .element('css selector', 'a[title="Ride"]+div select', function (res) {
                    if (res.value && res.value.ELEMENT) {
                        this
                            .click('a[title="Ride"]+div select option:nth-child(2)')
                            .pause(5000)
                    }
                })
        }

        else if (filterType === 'color') {
            this
                .element('css selector', '.facets-faceted-navigation-item-color-picker', function (res) {
                    if (res.value && res.value.ELEMENT) {
                        this
                            .click('.facets-faceted-navigation-item-color-picker li:nth-child(1) span')
                            .pause(5000)
                    }
                })
        }

    }
}