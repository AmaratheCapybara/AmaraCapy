/** @type {import('./$types').RequestHandler} */
// src/routes/api/stripe/+server.js (or similar API endpoint)
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private';

const HHPID = "prod_TYNSlnwyo23Eoe";

const stripe = new Stripe(SECRET_STRIPE_KEY);

// Add a console log to verify
console.log('Stripe server initialization:', !!stripe);




export async function GET({ request }) {
     console.log('Endpoint was called!');
   try {
    // Test if stripe is properly initialized
    console.log('Before products call:', !!stripe);
    const products = await stripe.products.list({ limit: 1 });
    console.log('Products retrieved:', products);
    
    return new Response(JSON.stringify({ success: true, products }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Stripe error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}



/*import { json } from '@sveltejs/kit';
export async function GET() {*/

   /* const stripe = await loadStripe(PUBLIC_STRIPE_kEY);
    const HHandmades =await stripe.products.retrieve("prod_TYNSlnwyo23Eoe");
await fetch("/api/checkout", {
   
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        priceID:issubscription
    })

}).then 
    console.log("button clicked!").then 
    if (condition) {
        
    } else {
        
    }*/


/*
    return new Response();
};*/