import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import msgVector from '../../Assets/message-circle.svg'
import SpeakToNeo from './SpeakToNeo'
import Questions from './Questions'
import { questions } from './questionArray'

import './FAQ.css'

const FAQ = () => {

    const [data, setData] = useState(questions);

    return (
        <div className='faqNeoWraper'>

            <div className='faqConatiner'>

                <div className="faqLeftContainer">
                    <h2 className="faqHeading">Frequently Asked Questions</h2>
                </div>

                <div className="faqRightContainer">
                    {
                        data.map((curr) => {
                            const id = curr.id;
                            return <Questions key={id} {...curr} />
                        })
                    }
                </div>

                <div className="needHelp">
                    <img src={msgVector} alt="" />&nbsp;  Still need help? &nbsp; <a href="mailto:support@neighborhue.com" target='_blank' rel="noreferrer"> Email us</a>
                </div>
            
            </div>

            <SpeakToNeo />
        </div>
    )
}

export default FAQ