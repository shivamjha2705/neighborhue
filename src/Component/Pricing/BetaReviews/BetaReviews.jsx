import React from 'react'
import yellowUnderline from '../../../Assets/yellowUnderline.svg'
import { CommentSlider } from '../../Comments/Comments'

import './BetaReviews.css'

const BetaReviews = () => {
    return (
        <div className='betaReviewsConatiner'>
            <h2 className="betaReviewsHeading">What our Beta users saying? <img src={yellowUnderline} alt="" /></h2>

{/* make the changes in the animation */}
            <CommentSlider />

        </div>
    )
}

export default BetaReviews