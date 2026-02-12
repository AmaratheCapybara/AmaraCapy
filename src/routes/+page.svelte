<script>

	import * as response from '@sveltejs/kit';
let {Includes=[]} = $props();


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
		<h1>$10</h1>
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
