module.exports ={

    'Global commands test 1' : client => {

        client
        //.url('http://assos.dev.paperplane.net')
        
        .goToURL('/ij-bonka-6?quantity=1&Item%20Gender=ij-bonka-6_Red%20Swiss-1-M.jpg&color=144','.header-profile-login-link')
        .goToLogin('ritesh@paperplane.net','welcome123')
        
        
        
        
        
        
        

        .pause(4000)
        .end();

        //.goToCartPage()
        //.imageSlider()
        //.viewCartPopover()
        //.visitCustServ()
        //.visitAssosWorld('.ASSOS.open .menu-category-listing-men li')     PENDING
        //.visitFirstSearchProduct('T.equipe')
        //.goToSearchResults('Ij.HaBu')
        //.visitShortsStories()
        //.womenFromCartPopover()
        //.menFromCartPopover()
        //.visitStoreLoc('Perth Australia')
        //.goToLogin('ritesh@paperplane.net','welcome123')

    }


}