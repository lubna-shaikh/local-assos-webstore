var filterType;

module.exports = {
    command: function (filterType) {
        return this
            .getLocationInView('.facets-item-list-sort-selector')
            .click('.facets-item-list-sort-selector')
        if (filterType === 'highToLow') {
            this
                .click('.facets-item-list-sort-selector option.onlinecustomerprice-desc')

        }
        else if (filterType === 'lowToHigh') {

            this
                .click('.facets-item-list-sort-selector option.onlinecustomerprice-asc')
        }

         else if (filterType === 'featured') {

            this
                .click('.facets-item-list-sort-selector option.commercecategory-asc')
        }
        this
            .pause(5000)
    }
}