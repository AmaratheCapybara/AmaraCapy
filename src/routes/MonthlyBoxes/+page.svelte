<script>
	import { load } from '../+page';



    /** @type {import('./$types').PageProps} */
    let { data, Response } = $props();
  
</script>
<h1>
    Pick what box fits your preferences
</h1>
{#snippet boxoption(option)}
    <h2>{option.name}</h2>
    <h4>{option.description}</h4>
    <h3>{option.price}</h3>
    <button>Sign Up Now!</button>
{/snippet}

{#await load()}
    <p retrieving subscriptionsp></p>
{:then Response} 
    {@render boxoption(Response)}
{/await}