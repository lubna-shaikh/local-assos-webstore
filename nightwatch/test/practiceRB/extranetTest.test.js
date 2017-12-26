module.exports = {

    'test': client => {
        client
            .url("http://extranet.staging.assos.com/search")
            .waitForElementVisible('.facets-facet-browse-items .facets-items-collection-view-row')
            //.waitForElementVisible('.order - grid - table - container', 5000)
            // .setValue('.facets - item - list - show - selector’, ‘48')
            // .execute(function () {
            //     $('.facets - item - list - show - selector’).trigger(‘change')
            // })
            // .pause(6000)
            .elements('css selector', '.facets-facet-browse-items .facets-items-collection-view-row',function(res){
                var size=res.value.length;
                console.log(size);
            });
    }
}