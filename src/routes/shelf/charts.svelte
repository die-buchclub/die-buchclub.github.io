<script lang="ts">

    import WorldMap from './WorldMap.svelte';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let books;

    import {Arc, BarChart, Chart, Group, Svg, Text} from 'layerchart';
    import {Tooltip} from "layerchart";
    import {PieChart} from "layerchart";
    import {interpolateRainbow} from 'd3-scale-chromatic';
    import {scaleQuantize} from 'd3-scale';

    const screenWidth = writable(window.innerWidth);

    // Listen for window resize events to update the screen width
    onMount(() => {
        const handleResize = () => {
            screenWidth.set(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component is destroyed
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const buckets = [
        {label: "<150", x0: 0, x1: 150},
        {label: "150-200", x0: 150, x1: 200},
        {label: "200-250", x0: 200, x1: 250},
        {label: "250-300", x0: 250, x1: 300},
        {label: "300-350", x0: 300, x1: 350},
        {label: ">350", x0: 350, x1: Infinity},

    ];


    const histogramData = buckets.map((bucket) => {
        const booksInBucket = books.filter(
            (book) => book.pages >= bucket.x0 && book.pages < bucket.x1
        );
        return {
            ...bucket,
            length: booksInBucket.length,
            books: booksInBucket,
        };
    });

    const colorRange = [
        "hsl(353 73.8% 67.1%)",
        "hsl(336 42.9% 48%)",
        "hsl(333 94.4% 86.1%)",
        "hsl(182 33.6% 55.1%)",
        "hsla(343,68%,72%,0.99)",
        "hsl(331 79.2% 60.4%)",
        "hsl(319 22.2% 85.9%)"
    ];

    interface Book {
        genre: string;
        title: string;
        pages: number;
        publicationYear: number;
        author: string;
    }

    interface GenreCount {
        count: number;
        books: Book[];
    }

    const genreCounts = books.reduce((acc: Record<string, GenreCount>, book: Book) => {
        if (!acc[book.genre]) {
            acc[book.genre] = { count: 0, books: [] };
        }

        acc[book.genre].count += 1;
        acc[book.genre].books.push(book);

        return acc;
    }, {} as Record<string, GenreCount>);

    const genreData = Object.entries(genreCounts).map(([genre, { count, books }]) => ({
        genre,
        value: count,
        books,
    }));
</script>

<style>
    .graph {
        width: 70%;
        margin: 20px;
    }

    .title {
        font-weight: bold;
    }

    /* Mobile responsiveness */
    @media (max-width: 900px) {
        .graph {
            margin: 0;
            width: 100%;
        }
        .pie-chart-legend {
            margin-top: 20px; /* Adjust margin between chart and legend */
        }
    }

    .legend-below {
        flex-direction: column !important;
        align-items: center !important;
    }

</style>

<div>
    <div class="graphs">
        <div class="graph pageCountGraph">
            <h1 class="title">Anzahl an Seiten</h1>
            <div class="h-[300px] p-4 border rounded">
                <BarChart
                        data={histogramData}
                        x="label"
                        y="length"
                        bandPadding={0.2}
                        props={{
                    highlight: { area: false },
                    xAxis: { tweened: true },
                    yAxis: { format: "metric", tweened: true },
                    bars: { tweened: true,  class: "fill-primary", stroke: "white" },
    }}
                >
                    <svelte:fragment slot="tooltip">
                        <Tooltip.Root class="backdrop-blur-[200px]" let:data>
                            <Tooltip.Header class="text-center">{data.label}</Tooltip.Header>
                            <Tooltip.List>
                                <Tooltip.Item label="Count" value={data.length} format="integer"/>
                                <Tooltip.Separator/>
                                {#each data.books.slice(0, 5) as book}
                                    <Tooltip.Item label={book.title} value={book.pages}/>
                                {/each}
                                {#if data.books.length > 5}
                                    <span></span>
                                    <span>...</span>
                                {/if}
                            </Tooltip.List>
                        </Tooltip.Root>
                    </svelte:fragment>
                </BarChart>
            </div>
        </div>

        <div class="graph genresGraph">
            <h1 class="title">Genres</h1>
            <div class="h-[300px] p-4 border rounded">
                <PieChart
                        data={genreData}
                        key="genre"
                        value="value"
                        legend={{
                            placement: $screenWidth < 900 ? "bottom-left" : "left", // Change placement on mobile
                            orientation:  "vertical" }
                            }
                        cRange={colorRange}
                >
                    <svelte:fragment slot="tooltip">
                        <Tooltip.Root class="backdrop-blur-[200px]" let:data>
                            <Tooltip.Header class="text-center">{data.genre}</Tooltip.Header>
                            <Tooltip.List>
                                <Tooltip.Item label="Count" value="{data.value}" format="integer"/>
                                <Tooltip.Separator/>
                                {#each data.books.slice(0, 5) as book}
                                    <Tooltip.Item label ="" value={book.title}/>
                                {/each}
                                {#if data.books.length > 5}
                                    <span></span>
                                    <span>...</span>
                                {/if}
                            </Tooltip.List>
                        </Tooltip.Root>
                    </svelte:fragment>
                </PieChart>
            </div>
        </div>

        <div class="graph yearGraph">
            <h1 class="title">Erstveröffentlichung</h1>
            <ul class="steps steps-vertical lg:steps-horizontal">
                {#each books.sort((a, b) => a.publicationYear - b.publicationYear) as book}
                    <li data-content="{book.publicationYear}" class="step step-primary">{book.author}</li>
                {/each}
            </ul>
        </div>

        <div class="graph mapGraph">
            <h1 class="title">Wurzeln unserer Autorinnen</h1>
            <WorldMap {books}></WorldMap>
        </div>
    </div>

</div>
