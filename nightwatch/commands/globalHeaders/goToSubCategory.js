
var menuItem;

module.exports = {
    command: function (menuItem, menuItemClass, hrefAttribute) {
        
        return this
            .getLocationInView('.ditch-mobile ' + menuItemClass)
            .moveToElement('.ditch-mobile ' + menuItemClass, 1, 1,function(){
                if (menuItem === "new") {
                    console.log('NEW');
                    this
                        .click('.ditch-mobile .NEW .new-menu li:nth-child(1) a.menu-promo-content-block')
                        .waitForElementVisible('.global-views-breadcrumb')
                }
                else if(menuItem==="category"){
                    console.log('Menu Category');
                    this
                        .click('.ditch-mobile  a[href="' + hrefAttribute + '"]')
                        .waitForElementVisible('.banner-section')
                }
            })

        

    }
}