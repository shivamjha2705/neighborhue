import React from 'react'
import solution1 from '../../Assets/solutions1.svg'
import solution2 from '../../Assets/solutions2.svg'
import solution3 from '../../Assets/solutions3.svg'
import './Solutions.css'


const Solutions = () => {
    return (
        <>
            <div className='solutionsContainer'>

                <div className="solutionIntro">
                    <p className='boldSolutionIntro'>How to use the <br /> <span className='boldSolutionIntro boldSolutionIntroBg'>Hue AI model</span></p>
                    <p className='lightSolutionIntro'>Start by entering your desired city in the location text box. Once your location is set, continue by asking Hue AI for a neighborhood recommendation based on the preferences you find most important. Hue will respond with the best area based on your request. Ask where the best restaurant scene is, where to find amazing jazz music, or which neighborhoods are affordable in the city!</p>
                    <p id="lightSolutionMobile">Experience our AI chatbot's instant, personalized excellence, loved by 86% of users</p>
                </div>

                <div className="solutionItems">
                    <div className="solution">
                        <img src={solution1} alt="" className='solutionImage' />
                        <p className='alignCenter'>Ask Hue for the best<br />areas in the city</p>
                    </div>
                    <div className="solution">
                        <img src={solution3} alt="" className='solutionImage' />
                        <p className='alignCenter'>Receive recommendation and<br />Read our blogs</p>
                    </div>
                    <div className="solution">
                        <img src={solution2} alt="" className='solutionImage' />
                        <p className='alignCenter'>Your data & preferences<br />are always secured</p>
                    </div>
                </div>

            </div>
            {/* <OldCustomers /> */}
        </>
    )
}

export default Solutions;