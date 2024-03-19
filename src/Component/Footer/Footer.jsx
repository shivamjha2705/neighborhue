import React from 'react'
import { HashLink } from 'react-router-hash-link'
import arrow from '../../Assets/arrow-right-bk.svg'

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footerContainer'>
                <div className="upperFooter">
                    <div className="footerItem">
                        <h3 className="footerHeading">Platform</h3>
                        <div className="footerLinkContainer">
                            <a href="/" className="footerLink">Home</a>
                            <a href="/pricing" className="footerLink">Pricing</a>
                            <a href="/blogs" className="footerLink">Blogs</a>
                        </div>
                    </div>

                    <div className="footerItem">
                        <h3 className="footerHeading">Company</h3>
                        <div className="footerLinkContainer">
                            <HashLink smooth to='/contact#aboutUs' className="footerLink">About Us</HashLink>
                            <a href="/contact" className="footerLink">Contact Us</a>
                            <a href="https://equirenter.com" target='_blank' rel="noreferrer" className="footerLink">Equirenter.com</a>
                        </div>

                    </div>
                    <div className="footerItem" >
                        <h3 className="footerHeading">Trust</h3>
                        <div className="footerLinkContainer">
                            <a href="/terms_of_use" className="footerLink">Terms of Use</a>
                            <a href="/privacy_policy" className="footerLink">Privacy Policy</a>
                            {/* <a href="" className="footerLink">Cookie Policy</a> */}

                        </div>
                    </div>

                    <div className="footerItem">
                        <h3 className="footerHeading">Connect</h3>
                        <div className="footerLinkContainer">
                            <a href="https://www.instagram.com/neighborhue_ai/ " target='_blank' rel='noreferrer' className="footerLink">Instagram</a>
                            <a href="https://www.linkedin.com/company/neighborhue/ " target='_blank' rel='noreferrer' className="footerLink">Linkedin</a>
                            <a href="https://www.tiktok.com/@neighborhue?_t=8kEOxkT1K09&_r=1" target='_blank' rel='noreferrer' className="footerLink">TikTok</a>
                            {/* <span className="footerLink">Twitter</span> */}
                        </div>
                    </div>

                    
                </div>
                <div className="lowerFooter">© 2024 Neighborhue. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer;