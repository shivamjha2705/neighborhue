import React from 'react'
import cmp1 from '../../../Assets/trustedCmp1.png'
import cmp2 from '../../../Assets/trustedCmp2.png'
import cmp3 from '../../../Assets/trustedCmp3.png'
import cmp4 from '../../../Assets/trustedCmp4.png'
import cmp5 from '../../../Assets/trustedCmp5.png'
import cmp6 from '../../../Assets/trustedCmp6.png'
import cmp7 from '../../../Assets/trustedCmp7.png'
import cmp8 from '../../../Assets/trustedCmp8.png'
import leo from '../../../Assets/leo.webp'
import degree from '../../../Assets/180deg.webp'
import unesquo from '../../../Assets/unesquo.webp'
import dristi from '../../../Assets/dristi.jpg'
import iic from '../../../Assets/IIC.jpg'
import bit from '../../../Assets/bit logo.png'
import techavatar from '../../../Assets/techavatar.png'
// import rightArrow from '../../../Assets/arrowRight.png'
// import ceo from '../../../Assets/reviewer2.webp'

// import customerCareBg from '../../../Assets/customerSupportVector.svg'


import './TrustedBy.css'

let cmpArr = [cmp1, cmp2, cmp3, cmp4, cmp5, cmp6, cmp7, cmp8];
// console.log(cmpArr)

// const CustomerSupport = () => {
//     return (
//         <div className="customerSupportContainer">

//             <div className="supportLeft">
//                 <h2 className="customerSupportHeading">Customers love our support team, and so will you?</h2>
//                 <div className="customerSupportActions">
//                     <a href="#" target='_blank'>
//                         {/* <div className="scheduleDemo">
//                             Schedule a Demo
//                             <img src={rightArrow} alt="" />
//                         </div> */}
//                         <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff"}}>
//                         Schedule a Demo
//                         <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
//                     </button>
//                     </a>
//                     <a href="#" target='_blank' className="peopleReview">
//                         Why People love us
//                     </a>
//                 </div>
//                 <div className="ceoComment">
//                     <p className="ceoWords">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae"</p>
//                     <div className="ceo">
//                         <img src={ceo} alt="ceo image" />
//                         XYZ,&nbsp;<span>CEO of Neighborhue</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="supportRight">
//                 {/* <div className="supportVectorContainer"> */}
//                 {/* <img src={customerSupport} alt="Customer Care" className='customerSupportImg' />
//                     <img src={doodle} alt="Vector Art" className='doodleVector' />
//                     <img src={planet} alt="Vector Art" className='planetVector' />
//                     <div className="customerSupportText">Hi Lisa, is there anything i can help you today?</div> */}

//                 <img src={customerCareBg} alt="" loading='lazy' />
//                 {/* </div> */}
//             </div>

//         </div>
//     )
// }

const TrustedBy = () => {
    return (
        <div className='trustedBy'>
            <div className='trustedByContainer'>
                
                <h2 className="trustedHeading">Trusted Partners</h2>

                {/* <p className="trustedSubHeading">15+ Companies & Influencers from all over India</p> */}

                {/* ADD ANIMATION */}
                <div className="trustedCmpContainer">
                    <img src={techavatar} alt="company logo" className='trustedCompanyLogo' />
                    <img src={bit} alt="company logo" className='trustedCompanyLogo' />
                    <img src={dristi} alt="company logo" className='trustedCompanyLogo' />
                    <img src={iic} alt="company logo" className='trustedCompanyLogo' />
                    <img src={leo} alt="company logo" className='trustedCompanyLogo' />
                    <img src={degree} alt="company logo" className='trustedCompanyLogo' />
                    <img src={unesquo} alt="company logo" className='trustedCompanyLogo' />
                    {/* <img src={cmp8} alt="company logo" className='trustedCompanyLogo' /> */}
                </div>

            </div>

            {/* <CustomerSupport /> */}
        </div>
    )
}

export default TrustedBy;