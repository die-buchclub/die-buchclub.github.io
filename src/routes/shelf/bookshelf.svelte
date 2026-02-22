<script lang="ts">
    import {base} from "$app/paths";
    import type {Book} from "$lib/assets/Book.interface";

    export let books;
</script>

<div class="bookshelf">
    <div class="shelf-grid">
        {#each books as book}
            <div class="book-container">
                <div class="book">
                    <img src="{base}{book.coverSrc}" alt="Book cover" />
                </div>
            </div>
        {/each}
    </div>
    <span> Shelf image: <a href="https://www.vecteezy.com/free-vector/wood">Wood Vectors by Vecteezy</a></span>
</div>

<style>
    :root {
        /* ===== Core knobs ===== */
        --book-width: clamp(100px, 15vw, 140px);
        --book-ratio: 3 / 2;          /* height = width * ratio */
        --shelf-gap: 105px;            /* vertical distance between shelves */
        --shelf-thickness: 45px;      /* visual wood thickness */
        --shelf-side-padding: clamp(40px, 8vw, 140px);
        --shelf-max-width: 1200px;

        /* ===== Derived values ===== */
        --book-height: calc(var(--book-width) * var(--book-ratio));
        --row-height: calc(var(--book-height) + var(--shelf-gap));
    }

    /* ========================= */
    /* Bookshelf container       */
    /* ========================= */
    .bookshelf {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: var(--shelf-gap);
        margin-top: calc(var(--shelf-gap));
    }

    /* ========================= */
    /* Responsive grid           */
    /* ========================= */
    .shelf-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--book-width), 1fr));
        gap: var(--shelf-gap);
        align-items: end;

        /* SPACE LEFT & RIGHT OF BOOKS */
        padding-bottom: 25px;
        padding-left: var(--shelf-side-padding);
        padding-right: var(--shelf-side-padding);

        background-image: url("/vecteezy_wood-table-perspective-view-wooden-desk-surface_12758695.png");
        background-repeat: repeat-y;
        background-size: 100% var(--row-height);
        background-position: left calc(var(--row-height) - var(--shelf-thickness));
    }

    /* ========================= */
    /* Book container            */
    /* ========================= */
    .book-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        perspective: 300px;
        margin-bottom: calc(var(--shelf-gap) * 0.5);
        margin-top: calc(var(--shelf-gap) * -0.5);
        padding: 0 5px 5px;
    }

    /* ========================= */
    /* Book                      */
    /* ========================= */
    .book {
        aspect-ratio: 2 / 3;
        width: var(--book-width);
        transform: rotateY(-30deg);
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.8s ease;
    }

    .book:hover {
        transform: rotateY(0deg);
    }

    /* Front cover */
    .book > :first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        box-shadow: 3px 3px 15px #666;
    }

    /* Spine */
    .book::before {
        content: '';
        position: absolute;
        top: 2px;
        width: 40%;
        height: calc(100% - 4px);
        background: #fff;
        transform:
                translateX(180%)
                rotateY(90deg)
                translateX(100%);
    }

    /* Back */
    .book::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: #01060f;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        transform: translateZ(-50px);
        box-shadow: -5px 0 30px 5px #666;
    }

    @media (max-width: 400px) {
        :root {
            --book-width: clamp(60px, 250vw, 100px);
            --shelf-gap: 60px;
            --book-ratio: 3 / 2;          /* height = width * ratio */
            --shelf-thickness: 20px;      /* visual wood thickness */
            --book-height: calc(var(--book-width) * var(--book-ratio));
            --row-height: calc(var(--book-height) + var(--shelf-gap));
        }
        .book-container {
            padding: 0;
        }
    }
</style>