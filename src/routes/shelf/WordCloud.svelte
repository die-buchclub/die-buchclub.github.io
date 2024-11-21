<script lang="ts">
    import { onMount } from 'svelte';
    import d3Cloud from 'd3-cloud';
    import { descending, extent, rollups } from 'd3-array';

    // Import JSON data synchronously
    const modules = import.meta.glob('/src/lib/assets/books/*.json', { eager: true });

    export let fontSize = 20;
    export let maxWords = 100;
    export let wordPadding = 2;

    let dimensions = {
        width: 840,
        height: 600,
        margin: {
            top: 24,
            right: 0,
            bottom: 0,
            left: 0
        }
    };

    let text = ""; // Long string of concatenated keywords
    let words = []; // Holds processed words for rendering
    let maxFrequency = 0; // Maximum frequency of a keyword

    // Dynamically adjust dimensions based on screen size
    function updateDimensions() {
        if (window.innerWidth < 768) {
            // Mobile dimensions
            dimensions = {
                width: 340,
                height: 800,
                margin: {
                    top: 16,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            };
        } else {
            // Desktop dimensions
            dimensions = {
                width: 840,
                height: 600,
                margin: {
                    top: 24,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            };
        }
        generateWordCloud(); // Regenerate the word cloud on dimension change
    }

    // Generate the word cloud layout
    function generateWordCloud() {
        const tokens = text.trim().split(/\s+/g);
        const data = rollups(
            tokens,
            (g) => g.length,
            (w) => w.toLowerCase()
        )
            .sort(([, a], [, b]) => descending(a, b))
            .slice(0, maxWords)
            .map(([key, size]) => ({ text: key, size }));

        const cloudWords = [];
        const cloud = d3Cloud()
            .size([
                dimensions.width - dimensions.margin.left - dimensions.margin.right,
                dimensions.height - dimensions.margin.top - dimensions.margin.bottom - 24
            ])
            .words(data)
            .padding(wordPadding)
            .rotate(0)
            .font('Helvetica, Arial, sans-serif')
            .fontSize((d) => Math.sqrt(d.size) * fontSize)
            .on('word', ({ size, x, y, rotate, text }) => {
                cloudWords.push({ size, x, y, rotate, text });
            });

        cloud.start();

        words = cloudWords;
        [, maxFrequency] = extent(words, (d) => d.size);
    }

    onMount(() => {
        // Extract keywords from all JSON files
        let allKeywords = [];
        for (const path in modules) {
            const module = modules[path];
            if (module.keywords) {
                allKeywords = [...allKeywords, ...module.keywords];
            }
        }

        // Concatenate keywords into a single string
        text = allKeywords.join(" ");

        // Set initial dimensions and generate the word cloud
        updateDimensions();

        // Listen for window resize
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    });
</script>

<svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
>
    <text
            x={dimensions.width / 2}
            y={dimensions.margin.top}
            font-size="24"
            font-weight="bold"
            text-anchor="middle"
    >
    </text>
    <g transform={`translate(0 ${dimensions.margin.top + 24})`}>
        {#each words as word}
            <text
                    font-size={word.size}
                    transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
                    opacity={word.size / maxFrequency}
                    fill="#CC2936"
            >
                {word.text}
            </text>
        {/each}
    </g>
</svg>
