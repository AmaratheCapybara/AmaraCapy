<script>
	import Productbookmark from '$lib/components/Productbookmark.svelte';
	import Products from '$lib/components/Products';
</script>
{#each Products as product}
<Productbookmark></Productbookmark>
	{/each}