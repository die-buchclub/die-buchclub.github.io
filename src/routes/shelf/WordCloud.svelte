<script>
    import d3Cloud from "d3-cloud";
    import { descending, extent, rollups } from "d3-array";

    export let fontSize = 20;
    export let maxWords = 100;
    export let dimensions = {
        width: 840,
        height: 600,
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    };
    export let wordPadding = 2;
    export let text = "";
    export let title = "";
    export let description = "";

    const modules = import.meta.glob('$lib/assets/books/*.json', {eager: true});
    let allKeywords = [];
    for (const path in modules) {
        const module = modules[path];
        if (module.keywords) {
            allKeywords = [...allKeywords, ...module.keywords];
        }
    }

    text = allKeywords.join(' ');

    const tokens = text.trim().split(/\s+/g);

    const data = rollups(tokens, g => g.length, w => w.toLowerCase())
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
        .font("Helvetica, Arial, sans-serif")
        .fontSize(d => Math.sqrt(d.size) * fontSize)
        .on("word", ({ size, x, y, rotate, text }) => {
            cloudWords.push({ size, x, y, rotate, text });
        });

    cloud.start();

    const words = cloudWords;

    const [, maxFrequency] = extent(words, d => d.size);
</script>

<svg width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} text-anchor="middle" font-family="Helvetica, Arial, sans-serif">
    <text x={dimensions.width / 2} y={dimensions.margin.top} font-size="24" font-weight="bold" text-anchor="middle">{title}</text>
    <text x={dimensions.width / 2} y={dimensions.margin.top + 24} text-anchor="middle">{description}</text>
    <g transform={`translate(0 ${dimensions.margin.top + 24})`}>
        {#each words as word}
            <text font-size={word.size} transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`} opacity={word.size / maxFrequency} fill="#CC2936">{word.text}</text>
        {/each}
    </g>
</svg>