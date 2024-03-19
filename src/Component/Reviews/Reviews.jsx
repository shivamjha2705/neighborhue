import React from 'react'
import StarYellow from '../../Assets/Star Yellow.svg'
import StarGray from '../../Assets/Star Grey.svg'
import reviewer1 from '../../Assets/reviewer1.webp'
import reviewer2 from '../../Assets/reviewer5.webp'
import reviewer3 from '../../Assets/reviewer3.png'
import reviewer4 from '../../Assets/reviewer2.webp'
import reviewer5 from '../../Assets/reviewer4.webp'
import reviewer6 from '../../Assets/reviewer9.webp'
import reviewer7 from '../../Assets/reviewer7.webp'
import reviewer8 from '../../Assets/reviewer8.webp'
import reviewer9 from '../../Assets/reviewer6.webp'
import reviewer10 from '../../Assets/reviewer10.webp'
import reviewer11 from '../../Assets/reviewer11.webp'
import reviewer12 from '../../Assets/reviewer8.png'

import './Reviews.css'

const Reviews = () => {
    let review1 = "Hue AI helped me find my ream neighborhood by recommending the best area for what I personally like the most. Moving to a new home was so intimidating, given how little I knew about where I was going. Thanks to neighborhue, I was able to figure out where to move and eliminate all my moving anxiety.";
    let review2 = "I was planning a visit to New York and had no idea where to visit before asking Hue. It provided me with all the most local recommendations besides the main tourist spots and gave me a great itinerary for my trip. Such a great tool to use if you are going somewhere new for the first time.";
    return (
        <div className='reviewerConatainer'>

            <h2 className="reviewerHeading">Check out what our users are saying</h2>
            <p className="reviewerSubHeading">Here are a few responses from our beta program</p>
            <div className="reviewerMain">
                <div className="reviewerLeftItem">
                    <p className="review">{review1}</p>
                    <p className="reviewer">Great Website</p>
                    <div className="rating">
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarGray} alt="" className='star' />
                    </div>

                    <p className="review">{review2}</p>
                    <p className="reviewer">Amazing Functionality</p>
                    <div className="rating">
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                        <img src={StarYellow} alt="" className='star' />
                    </div>
                </div>
                <div className="reviewerRightItem">
                    <img src={reviewer1} alt="" className='reviewerImg' />
                    <img src={reviewer2} alt="" className='reviewerImg' />
                    <img src={reviewer3} alt="" className='reviewerImg' />
                    <img src={reviewer4} alt="" className='reviewerImg' />
                    <img src={reviewer5} alt="" className='reviewerImg' />
                    <img src={reviewer6} alt="" className='reviewerImg' />
                    <img src={reviewer7} alt="" className='reviewerImg' />
                    <img src={reviewer8} alt="" className='reviewerImg' />
                    <img src={reviewer9} alt="" className='reviewerImg' />
                    <img src={reviewer10} alt="" className='reviewerImg' />
                    <img src={reviewer11} alt="" className='reviewerImg' />
                    <img src={reviewer12} alt="" className='reviewerImg' />
                </div>
            </div>
        </div>
    )
}

export default Reviews;