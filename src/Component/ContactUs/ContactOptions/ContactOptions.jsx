import React from 'react'
import phone from '../../../Assets/phone.svg'
import mail from '../../../Assets/mail.svg'
import map from '../../../Assets/mapPin.svg'
import chat from '../../../Assets/messageCircle.svg'

import './ContactOptions.css'

const ContactOptions = () => {
    return (
        <div className="contactOptionsContainer">
            <div className="contactHeader">
                <h1>Contact with our friendly team</h1>
                <p>Let us know how we can help.</p>
            </div>

            <div className="contactHolder">
                <div className="contactCard">
                    <div className="iconHolder">
                        <i class="fa-brands fa-square-instagram fa-2xl"></i>
                    </div>
                    <h2 className="contactCardHeading">Chat with us</h2>
                    <p className="contactCardInfo">Direct message on Instagram</p>
                    <a href='https://www.instagram.com/neighborhue_ai?igsh=MWFuN2M3cDlqNjE2eg%3D%3D&utm_source=qr ' target='_blank' rel='noreferrer' className="contactLink">Chat on Instagram</a>
                </div>
                <div className="contactCard">
                    <div className="iconHolder">
                        <i class="fa-solid fa-envelope fa-2xl"></i>
                    </div>
                    <h2 className="contactCardHeading">Contact with Email</h2>
                    <p className="contactCardInfo">Support team will help you.</p>
                    <a href="mailto:support@neighborhue.com" className="contactLink">support@neighborhue.com</a>
                </div>
            </div>

        </div>
    )
}

export default ContactOptions