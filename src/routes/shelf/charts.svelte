<script>

    export let books;

    import {Arc, BarChart, Chart, Group, Svg, Text} from 'layerchart';
    import {Tooltip} from "layerchart";
    import {PieChart} from "layerchart";
    import { interpolateRainbow } from 'd3-scale-chromatic';
    import { scaleQuantize  } from 'd3-scale';

    const genreData = [
        { genre: "Fantasy", count: 3 },
        { genre: "Sci-Fi", count: 2 },
        { genre: "Mystery", count: 1 },
    ];

    const genreDataNew = Object.entries(
        books.reduce((acc, book) => {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
            return acc;
        }, {})
    ).map(([genre, count]) => ({ genre, count }));

    const buckets = [
        { label: "<150", x0: 0, x1: 150 },
        { label: "150-200", x0: 150, x1: 200 },
        { label: "200-250", x0: 200, x1: 250 },
        { label: "250-300", x0: 250, x1: 300 },
        { label: "300-350", x0: 300, x1: 350 },
        { label: ">350", x0: 350, x1: Infinity },

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


    const colorRange = scaleQuantize()
        .domain([0, genreDataNew.length - 1])  // Domain should be based on the number of slices
        .range([...Array(5)].map((_, i) => interpolateRainbow(i / 5)));  // Generate 5 colors

    console.log(colorRange(0)); // Should log the first color
    console.log(colorRange(1)); // Should log the second color
    console.log(colorRange(2)); // And so on...
</script>

<div>
    <h1>Anzahl an Seiten</h1>
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
                <Tooltip.Root let:data>
                    <Tooltip.Header class="text-center">{data.label}</Tooltip.Header>
                    <Tooltip.List>
                        <Tooltip.Item label="Count" value={data.length} format="integer" />
                        <Tooltip.Separator />
                        {#each data.books.slice(0, 5) as book}
                            <Tooltip.Item label={book.title} value={book.pages} />
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
