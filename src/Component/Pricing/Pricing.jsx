import React from 'react'
import PriceOption from './PriceOption/PriceOption'
import TrustedBy from './trustedBy/TrustedBy'
// import BetaReviews from './BetaReviews/BetaReviews'
import FAQ from '../FAQ/FAQ'
import './Pricing.css'



const Pricing = () => {
    return (
        <>


            <div className='pricingContainer' id='priceTop'>
                <PriceOption />
                <TrustedBy />
                {/* <BetaReviews /> */}
            </div>


            <FAQ />
        </>

    )
}

export default Pricing