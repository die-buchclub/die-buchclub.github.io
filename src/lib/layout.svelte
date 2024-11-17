<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<style>
    main {
        margin-left: 160px;
        margin-right: 160px;
    }
</style>

<header>
    <Header/>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <Footer/>
</footer>