<script>
	import { PUBLIC_STRIPE_kEY } from "$env/static/public";
    import {loadStripe} from "@stripe/stripe-js";
	import * as response from '@sveltejs/kit';
let {Includes=[]} = $props();

/*const SUBSCRIPTION_PRICE_ID = 'price_1SbvxvQqrpU2bu5FsXOY288e';
const 	LIFETIME_PRICE_ID = 'price_1SbvxdQqrpU2bu5Fvk6pLFaN';
//const HEARTWARMING_HOMEMADES = "price_1SbGhKQqrpU2bu5FpHbFBczq";

async function onclick(isSubscription) {
const stripe = await loadStripe(PUBLIC_STRIPE_kEY)

	const response = await fetch("/api/checkout",{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body:JSON.stringify({
			priceId:isSubscription ? SUBSCRIPTION_PRICE_ID : LIFETIME_PRICE_ID,
			mode: isSubscription ? "subscription" : "payment",
		})
	})

	const {sessionId} =await response.json()

	stripe?.redirectToCheckout({sessionId})

}*/

//
</script>
{#snippet subscriptions(Name, Price)}
<h2>{Name}</h2>
	<h1>{Price}</h1>
	<li>
	{#each Includes as item}
		<ul>
			{item}
		</ul>
	{/each}
	</li>
{/snippet}

<main>
	<div class="subcard">
		<h1>Price go here</h1>
		<ul>
			<li>2-3 handmade Items</li>
		</ul>
		<button onclick={() => onclick(false)}>"lifetime"(emoji really)</button>
	</div>
	<div class="subcard">
		<h1>Price go here</h1>
		<ul>
			<li>2-3 handmade Items</li>
			<li>1 medium sized handmade item</li>
		</ul>
		<button onclick={() => onclick(true)}>Subcription model</button>
	</div>
</main>
