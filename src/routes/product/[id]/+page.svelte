<script>
	import { page } from '$app/state';

    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    const productId = page.params.id;
</script>