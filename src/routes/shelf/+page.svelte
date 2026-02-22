<script lang="ts">
    import Layout from '../../lib/layout.svelte';
    import Charts from './charts.svelte';
    import Bookshelf from './bookshelf.svelte';
    import type {Book} from "$lib/assets/Book.interface";

    let books: Book[] = [];

    const modules = import.meta.glob('$lib/assets/books/*.json', {eager: true});
    for (const path in modules) {
        const module = modules[path];
        books.push(module.default);
    }

    books.sort((a, b) => a.id - b.id);

    let toggle = true;

    function togglePages() {
        toggle = !toggle;
    }
</script>

<style>
    .main {
        width: 100%;
        height: inherit;

        .title {
            font-size: 25px;
            font-weight: bold;
            align-content: center;
            padding: 10px;
        }

        .title-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            box-shadow: 0px 2px 0px rgba(102, 102, 102, 0.2);
        }
    }
</style>

<Layout>
    <div class="main">
        <div class="title-container">
            <h3 class="title">
                Die Buchclub: Erlesene Auswahl
            </h3>
            <button on:click={togglePages}>
                {toggle ? 'Daten&Diagramme' : 'Übersicht'}
            </button>
        </div>
        {#if toggle}
            <Bookshelf {books}></Bookshelf>
        {:else}
            <Charts {books}></Charts>
        {/if}
    </div>
</Layout>
