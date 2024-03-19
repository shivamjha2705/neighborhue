import React, { useState } from 'react'
import plusBtn from '../../Assets/plusBtn.png'
import minusBtn from '../../Assets/minusBtn.png'

import './FAQ.css'

const Questions = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="faqQuestionContainer">
            <div className="faqQuestionTitle" >
                <span className="question">{question}</span>
                <p onClick={() => { setShow(!show) }}>{show ? "-" : "+"}</p>
            </div>
            {show && <div className="faqQuestionAnswer">{answer}</div>}
        </div>
    )
}


export default Questions