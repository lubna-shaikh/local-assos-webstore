module.exports = {
    command: function () {
        return this
            // .url(client.launchUrl)
            // .waitForElementVisible('.header-main-nav-content')
            .getLocationInView('.ditch-mobile .itemssearcher-input.typeahead.tt-input')
            .click('.ditch-mobile .itemssearcher-input.typeahead.tt-input')
            .setValue('.ditch-mobile .itemssearcher-input.typeahead.tt-input', 'box')
            .waitForElementVisible('.itemssearcher-item-all-results')
            .click('.itemssearcher-item-all-results')
            .assert.urlContains(this.launchUrl + '/search?keywords=box')
            .pause(5000)
            .assert.containsText('.shopping-layout-breadcrumb:not(.sub-category-breadcrumb) .global-views-breadcrumb', 'HOME SEARCH RESULTS')
           
    }
}