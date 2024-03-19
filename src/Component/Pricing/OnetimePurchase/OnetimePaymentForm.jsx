import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";
import "./OnetimeCheckout.css"; // Import CSS file

const OnetimePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const user = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!user.user.email){
      alert("Please sign in first.");
      window.location.href = "/register";
    }
    try {
      // Create a Checkout session on the server
      const response = await fetch(`https://neighborhue.vercel.app/api/payment/checkout-session-onetime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 199, // replace with the actual amount in cents (e.g., $1.99 = 199 cents)
          email: user.user.email,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.error(error);
        setPaymentError('Payment failed');
      }
    } catch (error) {
      console.error(error);
      setPaymentError('An error occurred while processing the payment');
    }
  };

  return (
    <div className='PaymentForm'>
      <form onSubmit={handleSubmit}>

        <button className='purchaseBtn' type="submit">Pay Now</button>

      </form>
    </div>
  );
};

export default OnetimePaymentForm;
