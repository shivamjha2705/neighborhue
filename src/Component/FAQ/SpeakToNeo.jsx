import React from 'react'
import neoLogo from '../../Assets/neoLogo.png'
// import speakToMe from '../../Assets/speakToMe.svg'
import { HashLink } from 'react-router-hash-link'

import './FAQ.css'


const SpeakToNeo = () => {
    return (
        // <div className="speakToNeoContainer">
        <div className="speakToNeoCenter">
            <img src={neoLogo} alt="" className='neoLogo' />

            <div className="neoIntro">
                <h2> I am Hue</h2>
                <p>You're only one click away from a life-changing journey</p>

                <HashLink smooth to='/meetneo#chatBot'>
                <button className="comingBtn" style={{background: "#02061D",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)"}}>
                        Speak To Me
                        <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
                </button>
                </HashLink>


            </div>

        </div>
        // </div>
    )
}
export default SpeakToNeo