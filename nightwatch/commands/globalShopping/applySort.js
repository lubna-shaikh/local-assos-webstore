var filterType;

module.exports = {
    command: function (filterType) {
        return this
            .getLocationInView('.facets-item-list-sort-selector')
            .click('.facets-item-list-sort-selector', function () {
                if (filterType === 'highToLow') {

                    this
                        .click('.facets-item-list-sort-selector option.onlinecustomerprice-desc', function () {
                            console.log('High to Low sort');
                        })

                }
                else if (filterType === 'lowToHigh') {

                    this
                        .click('.facets-item-list-sort-selector option.onlinecustomerprice-asc', function () {
                            console.log('Low to High sort');
                        })
                }

                else if (filterType === 'featured') {

                    this
                        .click('.facets-item-list-sort-selector option.commercecategory-asc', function () {
                            console.log('Featured sort');
                        })
                }
            })

        this
            .pause(5000)
    }
}