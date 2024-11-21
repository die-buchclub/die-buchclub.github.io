<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<style>
    main {
        margin-left: 160px;
        margin-right: 160px;
    }
    @media (max-width: 768px) {
        main {
            margin-left: 20px;
            margin-right: 20px;
        }
    }

    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>

<div class="page-container">
    <header>
        <Header/>
    </header>

    <main>
        <slot></slot>
    </main>

    <footer class="footer">
        <Footer/>
    </footer>
</div>
