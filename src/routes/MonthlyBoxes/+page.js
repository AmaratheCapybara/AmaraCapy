/** @type {import('./$types').PageLoad} */
import { loadStripe } from '@stripe/stripe-js';
import { PUBLIC_STRIPE_kEY, SECRET_STRIPE_KEY } from '$env/static/public';
import Stripe from 'stripe';
export async function load() {

     const stripe = await loadStripe(PUBLIC_STRIPE_kEY);
    // Import Stripe as an ES module


    
    console.log("Stripe object:", stripe);
console.log("Stripe products:", stripe.products);
    
    
     const HHandmades =await stripe.products.retrieve("prod_TYNSlnwyo23Eoe")
    .then(product => console.log(product))
  .catch(error => console.error(error));
;
await fetch("/api/checkout", {
   Method:'GET',    

    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        
    })

}).then 
    console.log("button clicked!").then 
    if (condition) {
        
    } else {
        
    }
    return {};
};