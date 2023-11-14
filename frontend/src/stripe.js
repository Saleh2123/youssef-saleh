import {useStripe, useElements, PaymentElement, Elements} from '@stripe/react-stripe-js';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

import {useParams} from"react-router-dom"



const Check=({options})=>{

  const stripePromise = loadStripe('pk_test_51OAVMvGeO5iUBvxL6fvjE7UrNQm3PqhvbxN9WJfx8CLrXp2XOj1YdT2Idc3u6LOLMifn7drFobh51P4pepfZ8JY100eP87lH2y');
  


  return(
<Elements options={options} stripe={stripePromise}>
  <CheckoutForm></CheckoutForm>
</Elements>



  )
}
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {id}=useParams()
const {pack}=useParams()
  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/subscribe', {
        username:id,
        packageId:pack,
      });

     
    } catch (error) {
      console.error(error);
       }
  };
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    if(!pack.includes("pack")){
await handleSubscribe()
    }
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });



    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default Check;