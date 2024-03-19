import "./OnetimeCheckout.css"; // Import CSS file
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OnetimePaymentForm from './OnetimePaymentForm';
// import './Checkout.css'; // Import CSS file

const stripePromise = loadStripe('pk_live_51NpafSDAo8tmQ8RYRflJLIcQ7m7zGo1qe2peOGYOPvbFE1r2oI9DRspncDUUyPglEt5iR3D1hL1ZUAB1f55G9pcf00hsNpYbKh');
// console.log(process.env.REACT_APP_NEW)

const OnetimeCheckout = () => {
  return (
    <div className='CheckoutContainer'>
      <Elements stripe={stripePromise}>
        <OnetimePaymentForm />
      </Elements>
    </div>
  );
};

export default OnetimeCheckout;
