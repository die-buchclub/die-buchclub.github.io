<script>
    import Layout from '../lib/layout.svelte';
    import ConveyorShelf from './conveyor-shelf.svelte';
</script>

<Layout>
    <div class="hero bg-base-200 min-h-screen relative overflow-hidden">

        <div class="absolute inset-0">
            <ConveyorShelf />
        </div>

        <div class="absolute inset-0 bg-white/40"></div>

        <div class="hero-content text-center relative z-10">
            <div class="max-w-md bg-white/85 p-6 rounded-lg shadow-lg">
                <h1 class="text-5xl font-bold">Servus, Lust auf gute Bücher?</h1>
                <p class="py-6">
                    Hier sammeln sich Bücherwürmer aus Wien, die sich immer mal wieder treffen,
                    um <strong>Bücher von Frauen</strong> zu besprechen.
                </p>
                <p class="py-6">
                    Es sind alle Interresierten, ob Frau* oder nicht, herzlich eingeladen!
                </p>
                <a class="btn btn-primary" href="./join">Ich will mitmachen!</a>
                <a class="btn btn-secondary browse" href="./shelf">Bücherregal stöbern</a>
            </div>
        </div>

    </div>
</Layout>

<style>
    .browse {
        margin-top: 5px;
    }
</style>