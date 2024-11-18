<script lang="ts">
    import Layout from '../../lib/layout.svelte';
    import { base } from '$app/paths';

    interface Book {
        id: number;
        title: string;
        author: string;
        coverSrc: string;
        year: string;
        genre: string,
        pages: number,
        publicationYear: number
    }

    let books: Book[] = [];

    const modules = import.meta.glob('$lib/assets/books/*.json', { eager: true });
    for (const path in modules) {
        const module = modules[path];
        books.push(module.default);
    }

    books.sort((a, b) => a.id - b.id);
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
            box-shadow: 0px 2px 0px rgba(102, 102, 102, 0.2);
        }

        .shelf {
            padding-top: 20px;
            margin: 15px;
            display: flex;
            flex-wrap: wrap;
            padding-left: 10px;
        }
    }

    .book-container {
        width: 200px;
        height: 300px;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 400px;
    }

    .book {
        transform: rotateY(-30deg);
        position: relative;
        transform-style: preserve-3d;
        width: 200px;
        height: 300px;
        transition: transform 1s ease;
        animation: 1s ease 0s 1 initAnimation;
    }

    .book:hover {
        transform: rotate(0deg);
    }

    @keyframes initAnimation {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(-30deg);
        }
    }

    .book > :first-child {
        position: absolute;
        background: #0d47a1aa;
        width: 200px;
        height: 300px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        box-shadow: 5px 5px 20px #666;
    }

    .book::before {
        content: ' ';
        background: #fff;
        height: calc(300px - 2 * 3px);
        width: 50px;
        top: 3px;
        position: absolute;
        transform: translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2))
    }

    .book::after {
        content: ' ';
        position: absolute;
        left: 0;
        width: 200px;
        height: 300px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        background: #01060f;
        transform: translateZ(-50px);
        box-shadow: -10px 0 50px 10px #666;
    }
</style>

<Layout>
    <div class="main">
        <h3 class="title">Die Buchclub: Erlesene Auswahl</h3>
        <div class="shelf">
            {#each books as book}
                <div class="book-container">
                    <div class="book">
                        <img src={base}{book.coverSrc}/>
                    </div>
                </div>
            {/each}
        </div>

    </div>
</Layout>
