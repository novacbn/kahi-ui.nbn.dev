<script lang="ts">
    import AppNavigation from "./AppNavigation.svelte";
</script>

<div class="static-layout">
    <main class="static-container">
        <slot />
    </main>

    <AppNavigation />
</div>

<style>
    :global(.static-layout) {
        display: grid;

        grid-template-areas:
            "header"
            "content";

        grid-template-rows: auto 1fr;

        width: min(100vw, 100%);
        height: min(100vh, 100%);
    }

    :global(.static-layout) > :global(.static-container) {
        display: flex;
        flex-direction: column;

        grid-area: content;

        padding-top: 80px;

        overflow: hidden;
    }
</style>
