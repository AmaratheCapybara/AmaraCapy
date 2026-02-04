/** @type {import('./$types').RequestHandler} */
import { Checkout } from "@polar-sh/sveltekit";
/*import { json } from "@sveltejs/kit";
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';

const stripe =new Stripe(SECRET_STRIPE_KEY);
export async function POST({request}) {
    const {priceId, mode} = await request.json();

		const session = await stripe.checkout.sessions.create({
			payment_method_types:['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],
			mode,
			success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
			cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
		});
	console.log(requestBody);
    return json({sessionId:session.id});
}

 */
export const GET = Checkout({
	accessToken: process.env.POLAR_ACCESS_TOKEN,
	successUrl: process.env.SUCCESS_URL,
	returnUrl: "https://myapp.com", // An optional URL which renders a back-button in the Checkout
	server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
	theme: "dark", // Enforces the theme - System-preferred theme will be set if left omitted
});
