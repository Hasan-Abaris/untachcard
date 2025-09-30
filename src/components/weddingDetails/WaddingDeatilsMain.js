

import React from 'react'
import WeddingDetails from './WddingDetails'
import { WeddingPortfolio } from './WeddingPortfolio'
import { WeddingAbout } from './WeddingAbout'
import Reviews from './Reviews'
import FAQSection from './FaqSection'
import SimilarVenues from './SimilarVenues'

const WaddingDeatilsMain = () => {
    return (
        <>
            <WeddingDetails />
            <WeddingPortfolio />
            <WeddingAbout />
            <Reviews />
            <FAQSection />
            <SimilarVenues />
        </>
    )
}

export default WaddingDeatilsMain