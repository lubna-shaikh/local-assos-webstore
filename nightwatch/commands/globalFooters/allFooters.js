module.exports = {
    command: function () {
        return this

            .footerLinks('a[href="/customer-service"]', '/customer-service', 'HOME CUSTOMER SERVICE', '.static-sidenav:nth-child(1) .static-menu-tree-node-anchor-item-head', '.static-sidenav:nth-child(1) .static-menu-tree-node-anchor-item-head', 'Customer Service')

            .footerLinks('a[href="/size-guide"]', '/size-guide', 'HOME SIZE GUIDE', '.size-chart-anchor-item.active', '.size-chart-anchor-item', 'SIZE GUIDE')

            .footerLinks('a[href*="/product-care"]', '/product-care', 'HOME PRODUCT CARE', '.product-care-anchor-item.active', '.product-care-anchor-item', 'PRODUCT CARE')

            .footerLinks('a[href="/returns-exchanges"]', '/returns-exchanges', 'HOME RETURNS & EXCHANGES', '.returns-anchor-item.active', '.returns-anchor-item', 'RETURNS & EXCHANGES')

            .footerLinks('a[href="/warranty-repair-policy"]', '/warranty-repair-policy', 'HOME WARRANTY & REPAIR POLICY', '.warranty-anchor-item.active', '.warranty-anchor-item', 'WARRANTY & REPAIR POLICY')

            .footerForms('a[href="/become-a-dealer"]', '/become-a-dealer', 'HOME BECOME A DEALER')

            .footerLinks('.foot-links a[href*="/privacy"]', '/privacy', 'HOME PRIVACY', '.privacy-anchor-item.active', '.privacy-anchor-item', 'PRIVACY')

            .footerLinks('a[href="/terms-conditions"]', '/terms-conditions', 'HOME TERMS & CONDITIONS', '.terms-anchor-item.active', '.terms-anchor-item', 'TERMS & CONDITIONS')

            .footerForms('a[href="/contact-us"]', '/contact-us', 'HOME CONTACT US')

            .footerSocialMedia('a[href="https://www.linkedin.com/company/assos-of-switzerland"]', 'https://www.linkedin.com/')

            .footerSocialMedia('.icon.facebook-icon', 'https://www.facebook.com/assosofswitzerland')

            .footerSocialMedia('.icon.tweet-icon', 'https://twitter.com/assos_com')

            .footerSocialMedia('.icon.instagram-icon', 'https://www.instagram.com/assosofswitzerland/')

            .footerSocialMedia('.icon.youtube-icon', 'https://www.youtube.com/channel/UCgS2H1nSzBL2F2LbDCQGi3Q')

            .footerSocialMedia('.icon.strava-icon', 'https://www.strava.com/clubs/99524?hl')

            .footerSitemap()

            .footerLogo()

            .footerNewsletter()

    }
}