module.exports = {
    command: function (item) {
        return this
            .pause(3000)
            //  .getLocationInView('.facets-faceted-navigation-item-category-facet-group-content')
            //  .getLocationInView('.product-set .item-block-container:nth-child(1) .item-card-image-block')
            .getLocationInView(item)
            .pause(3000)
            .moveToElement(item, 10, 10)
            .pause(3000)
    }
}