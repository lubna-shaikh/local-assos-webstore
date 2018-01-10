module.exports ={

    'Global commands test 1' : client => {

        client
        .url('http://assos.dev.paperplane.net')
        .acceptAlert()
        //.goToURL('','.header-profile-login-link')
        .visitAssosWorld('.ASSOS.open .menu-category-listing-men li')
        
        

        .pause(4000)
        .end();


        //.visitCustServ()

        //.visitFirstSearchProduct('T.equipe')
        //.visitShortsStories()
        //.womenFromCartPopover()
        //.menFromCartPopover()
        //.visitStoreLoc('Perth Australia')
        //.goToLogin('ritesh@paperplane.net','welcome123')

    },

    'Global commands test 2' : client => {

        client
        .url('http://assos.dev.paperplane.net')
        .acceptAlert()
        //.goToURL('','.header-profile-login-link')
        .visitAssosWorld('.ASSOS.open .menu-category-listing-women a')
        
        

        .pause(4000)
        .end();


        //.visitCustServ()

        //.visitFirstSearchProduct('T.equipe')
        //.visitShortsStories()
        //.womenFromCartPopover()
        //.menFromCartPopover()
        //.visitStoreLoc('Perth Australia')
        //.goToLogin('ritesh@paperplane.net','welcome123')

    }


}