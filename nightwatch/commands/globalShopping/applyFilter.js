var filterType;

module.exports = {
    command: function (filterType) {
        return this
            .getLocationInView('.facets-faceted-navigation-item-category', function () {
                if (filterType === 'seasons') {

                    this
                        .element('css selector', 'a[title="Seasons"]+div select', function (res) {
                            if (res.value && res.value.ELEMENT) {
                                this
                                    .click('a[title="Seasons"]+div select option:nth-child(2)', function () {
                                        console.log('Seasons filter applied');
                                    })
                                    .pause(5000)

                            }
                            else {
                                console.log('No Seasons filter available');
                            }
                        })
                }

                else if (filterType === 'activity') {

                    this
                        .element('css selector', 'a[title="Ride"]+div select', function (res) {
                            if (res.value && res.value.ELEMENT) {
                                this
                                    .click('a[title="Ride"]+div select option:nth-child(2)', function () {
                                        console.log('Activity filter applied');
                                    })
                                    .pause(5000)

                            }
                            else {
                                console.log('No Activity filter available');
                            }
                        })
                }

                else if (filterType === 'color') {

                    this
                        .getLocationInView('.facets-faceted-navigation-title')
                        .element('css selector', '.facets-faceted-navigation-item-color-picker', function (res) {
                            if (res.value && res.value.ELEMENT) {
                                this
                                    .click('.facets-faceted-navigation-item-color-picker li:nth-child(1) span', function () {
                                        console.log('Color filter applied');
                                        this.pause(5000)
                                    })


                            }
                            else {
                                console.log('No Color filter available');
                            }
                        })
                }

            })


    }
}