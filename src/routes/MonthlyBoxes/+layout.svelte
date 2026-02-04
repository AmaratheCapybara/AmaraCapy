<script>
    /** @type {import('./$types').LayoutProps} */
    import "../../app.css";
    let { data, children } = $props();
</script>

{@render children()}

<style>
    @layer base {
       :global(html) {
        background-color: orange-300;
       }
    }
</style>