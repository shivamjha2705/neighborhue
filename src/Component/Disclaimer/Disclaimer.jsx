import React from 'react'
import { HashLink } from 'react-router-hash-link'

import microphone from '../../Assets/disclaimerLogo.svg'
import key from '../../Assets/key.png'
import secure from '../../Assets/secure.png'
import './Disclaimer.css'

const Disclaimer = () => {
    return (
        <div className='disclaimerContainer'>
            <img src={microphone} alt="" className='disclaimerLeft' />
            <div className="disclaimerRight">
                <div className="disclaimer1">
                    <img src={key} alt="" className="disclaimerVector" />
                    <p className="disclaimer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat</p>

                </div>
                <div className="disclaimer2">
                    <img src={secure} alt="" className="disclaimerVector" />
                    <p className="disclaimer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiatiusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.
                        <HashLink smooth to="/meetneo/#chatBot">
                            <span className='disclaimerAction'>
                                Start Journey
                            </span>
                        </HashLink>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer