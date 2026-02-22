<script  lang="ts">
    import type { Book } from "$lib/assets/Book.interface";
    import {base} from "$app/paths";

    let books: Book[] = [];

    const modules = import.meta.glob('$lib/assets/books/*.json', { eager: true });

    for (const path in modules) {
        const module = modules[path];
        books.push(module.default);
    }

    books = books.sort(() => Math.random() - 0.5);

    const rows = 4;
    const colsVisible = 5;

    // how many columns we need for smooth looping
    const colsNeeded = Math.max(colsVisible * 3, Math.ceil(books.length / rows));

    // build grid data
    let grid = [];
    for (let i = 0; i < rows * colsNeeded; i++) {
        grid.push(books[i % books.length]);
    }

    // duplicate for seamless scroll
    let display = [...grid, ...grid];
</script>

<div class="wrapper">
    <div class="belt">
        {#each display as book}
            <div class="book">
                <img src={book.coverSrc} alt={`${book.title} – ${book.author}`} />
            </div>
        {/each}
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .belt {
        display: grid;
        height: 100%;
        grid-template-rows: repeat(4, 1fr);
        grid-auto-flow: column;
        gap: 10px;
        animation: scroll 40s linear infinite;
        grid-auto-columns: max-content;
        padding-inline: 10px;
    }

    .book {
        aspect-ratio: 2 / 3;
        width: clamp(120px, 40vw, 150px);
        overflow: hidden;
        background: #eee;
        box-shadow: 0 6px 16px rgba(0,0,0,0.35);
    }

    .book img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
    }

    @media (max-width: 768px) {
        .book {
            width: clamp(120px, 30vw, 200px);
        }
    }
</style>