import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLink } from 'react-router-hash-link';
import upRightArrow from '../../Assets/arrow-up-right.png'
import virus from '../../Assets/virus.png'
import nurse from '../../Assets/nurse.png'
import gadgets from '../../Assets/gadgets.png'
import monitor from '../../Assets/monitor.png'
import medication from '../../Assets/medication.png'
import doctor from '../../Assets/animeDoctor.png'
import clock from '../../Assets/clock.png'
import shareIcon from '../../Assets/shareIcon.png'
import linkIcon from '../../Assets/linkIcon.png'

import './AiUses.css'

const ShareSection = () => {

    // insert url link here
    function copyURL() {
        navigator.clipboard.writeText("https://neighborhue.com/share");

        toast.success('Link copied in your clipboard!', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }

    const handleShareButtonClick = () => {
        if (navigator.share) {
            // Use navigator.share to share content
            navigator.share({
                title: 'Neighborhue',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi",
                // url
                url: '#'
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Handle the case where navigator.share is not available
            console.error('navigator.share is not supported in this environment');
        }
    };


    return (
        <div className="shareSectionContainer">
            <h2 className="shareHeader"> Show You <span className="deepBlue">Care </span> Share <span className="lightBlue">Neighborhue</span></h2>
            <p className="shareData">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi</p>

            <div className="shareActionContainer">
                {/* <button className="shareLink" onClick={handleShareButtonClick}>Share Link <img src={shareIcon} alt="" className='shareLogo' /></button> */}
                <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)"}}>
                        Share Link
                        <i class="fa-solid fa-share-nodes fa-lg" style={{color: "#ffffff"}}></i>
                    </button>
                {/* <button className="copyLink" onClick={copyURL}>Copy Link <img src={linkIcon} alt="" className='shareLogo' /></button> */}
                <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)"}}>
                        Copy Link
                        <i class="fa-solid fa-link fa-lg" style={{color: "#ffffff"}}></i>
                    </button>
            </div>
        </div>
    )
}


const AiUses = () => {
    return (
        <>
            <div className='AiUsesContainer'>
                <h2 className='AiUsesHeading'>Experience the power of <span className='blueBg'>Neighborhue</span></h2>

                <div className="AiCardConatiner">

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={virus} alt="" className='AiCardImg' />
                            {/* <div className="upcoming">
                            <img src={clock} alt="" />
                            Upcoming
                        </div> */}
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={nurse} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={gadgets} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={monitor} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={medication} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>

                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={doctor} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Lorem ipsum dolor sit amet consectetur</h4>
                        <p className="cardDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam</p>
                    </div>

                </div>

                <HashLink smooth to="/meetneo/#chatBot">
                    {/* <button>Try Neighborhue for free <img src={upRightArrow} alt="" /></button> */}
                    <button className="comingBtn" style={{background:"linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff"}}>
                    Try Neighborhue for free
                        <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
                    </button>
                </HashLink>

            </div>


            <ShareSection />
            <ToastContainer />
        </>
    )
}

export default AiUses;