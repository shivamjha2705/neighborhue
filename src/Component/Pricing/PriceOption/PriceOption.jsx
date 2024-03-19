import React, { useState } from 'react'
import BlueDiamond from '../../../Assets/baseDiamond.png'
import YellowDiamond from '../../../Assets/premiumDiamond.png'
import greenTick from '../../../Assets/greenTick.png'
import yellowTick from '../../../Assets/yellow_tick.png'
import yellowCross from '../../../Assets/yellow_cross.png'
import recomendedBg from '../../../Assets/premiumSmallBg.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveuser } from "../../../features/User";
import OnetimeCheckout from "../OnetimePurchase/OnetimeCheckout"
import PremiumCheckout from "../PremiumPurchase/PremiumCheckout"
import './PriceOption.css'

// const stripe = new Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PriceOption = () => {

    const freeToken = 2;
    const discount = 15;
    const plans = {
        '1cr': 5,
        '10cr': 20,
        '50cr': 40,
        '75cr': 75,
        '100cr': 200,
        '200cr': 375,
        '500cr': 499,
    };
    const monthPrice = 9.99;
    const yearPrice = 9999;
    const [monthlyPlan, setMonthlyPlan] = useState(true);
    const [cost, setCost] = useState(1.99);


    const [paymentError, setPaymentError] = useState(null);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log("User in pricing page : ", user);

    function planSelected(e) {
        const credit = e.target.value;
        setCost(plans[credit]);
    }

    const planSwitch = document.getElementById('toggleDisk');

    function togglePlan() {
        // if (monthlyPlan) {
        //     planSwitch.classList.add('yearly');
        // }
        // else {
        //     planSwitch.classList.remove('yearly');
        // }
        setMonthlyPlan(!monthlyPlan);
    }
    return (
        <div className='planContainer'>
            <h1 className='planHeading'>Choose Your Plan</h1>
            <p className="token"><span className='tokenRem'>{`${freeToken} Free `}</span>Chat recommendations<br />when you sign up</p>
            <div className="planCardContainer">
                <div className="basePlanContainer planCard">
                    <div className="basePlanHeader">
                        <img src={BlueDiamond} alt="diamond" />
                        <div className="basePlanHeading">
                            <h2 className='cardHeading'>Pay as you go</h2>
                            <p className="cardFeature token"><span className='tokenRem'>08</span> additional tokens</p>
                        </div>
                        <div className="basicPriceContainer">
                            <h2>$ {cost}</h2>
                            <p className="cardFeature token">one time payment</p>
                        </div>
                    </div>
                    <hr className='hr1 hr' />
                    <div className="basicPlanContainer" id='premiumServiceContainer' onChange={planSelected}>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={yellowTick} alt="tick" />
                            <p className="basic_service">08 Additional Tokens</p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={yellowCross} alt="tick" />
                            <p className="basic_service">Unlimited Chat</p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={yellowCross} alt="tick" />
                            <p className="basic_service">Chat History </p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={yellowCross} alt="tick" />
                            <p className="basic_service">Faster Response</p>
                        </div>
                    </div>
                    {/* <p>₹ 499 one time payment. Price incl. GST, if applicable</p> */}
                    <hr className='hr1 hr' />
                    {/* pay per use purchase button  */}
                    <OnetimeCheckout />
                </div>
                <div className="premiumPlanContainer planCard">
                    <div className="basePlanHeader">
                        <img src={YellowDiamond} alt="diamond" />
                        <div className="basePlanHeading">
                            <h2 className='premiunCardHeading cardHeading'>Premium</h2>
                            <p className="premiumCardService cardFeature token"><span className='serviceNumber'></span> Unlimited usage</p>
                        </div>
                        <div className="premiumPriceContainer">
                            <h2>$ {monthlyPlan ? monthPrice : yearPrice}</h2>
                            <p className="cardFeature token">{monthlyPlan ? "Per Month" : "Unlimited Token / Year"}</p>
                        </div>
                    </div>
                    <hr className='hr1 hr' />
                    <div className="basicPlanContainer" id='premiumServiceContainer' onChange={planSelected}>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={greenTick} alt="tick" />
                            <p className="service">Unlimited usage</p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={greenTick} alt="tick" />
                            <p className="service">Unlimited Chat</p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={greenTick} alt="tick" />
                            <p className="service">Chat History</p>
                        </div>
                        <div className='basicPlanOptions serviceContainer'>
                            <img src={greenTick} alt="tick" />
                            <p className="service">Faster Response</p>
                        </div>
                    </div>
                    <hr className='premiumHr2 hr2 hr' />
                    {/* premium purchase button  */}
                    {/* <button className="purchaseBtn premiumPurchaseBtn">Purchase Now</button> */}
                    <PremiumCheckout />
                </div>
                <div className="recomendedBar">
                    ✦ Recommended
                </div>
            </div>
        </div>
    )
}

export default PriceOption