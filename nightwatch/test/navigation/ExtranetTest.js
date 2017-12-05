var e1 = "('.order-grid-table')[0]";

module.exports = {

    'test': client => {
        client
            .url("http://extranet.staging.assos.com/search")
            .waitForElementVisible('.facets-facet-browse-items')
            .elements('css selector', '.order-grid-table', function (res) {
                var numOfTables = res.value.length;
                console.log(numOfTables);
                for (var i = 0; i < numOfTables; i++) {

                    client.
                        execute(function (i) {
                        
                            var table = $('.order-grid-table')[i];
                            var row = $(table).find('tr').find('td');
                          
                            return row;
                        },[i],
                        function (result) {
                            var rowCount = result.value.length;
                            console.log(rowCount)
                            var value1=((rowCount/2)-2);
                            //if((result)[value1].value!=0){
                                console.log((result)[value1].value)
                            //}
                        });

                }


            })


        // .end();
    }
}