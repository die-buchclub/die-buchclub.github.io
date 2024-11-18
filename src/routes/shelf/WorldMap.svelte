<script lang="ts">
    export let books;

    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    // Count the number of books by country, supporting multiple countries per book
    const bookCountByCountry = books.reduce((acc, book) => {
        book.country.forEach(country => {
            acc[country] = (acc[country] || 0) + 1;
        });
        return acc;
    }, {});

    onMount(async () => {
        const width = 960;
        const height = 500;

        // Create an SVG container for the map
        const svg = d3.select('#map')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Set up a mercator projection for the map
        const projection = d3.geoMercator()
            .scale(150)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // Load the GeoJSON data for the world map
        const geojson = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");

        // Add countries to the map
        svg.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", d => {
                const countryName = d.properties.name;
                const bookCount = bookCountByCountry[countryName] || 0;
                return bookCount > 0 ? "#69b3a2" : "#ccc";  // Green for countries with books, grey for others
            })
            .attr("stroke", "#fff")
            .attr("stroke-width", 0.5)
            .on("mouseover", function (event, d) {
                const countryName = d.properties.name;
                const count = bookCountByCountry[countryName] || 0;
                d3.select(this).style("opacity", 0.7);

                // Show tooltip on hover with book count
                const tooltip = d3.select('#tooltip');
                tooltip.style('left', `${event.pageX + 5}px`)
                    .style('top', `${event.pageY + 5}px`)
                    .style('visibility', 'visible')
                    .html(`<strong>${countryName}</strong><br>Books: ${count}`);
            })
            .on("mouseout", function () {
                d3.select(this).style("opacity", 1);

                // Hide tooltip
                d3.select('#tooltip').style('visibility', 'hidden');
            })
            .append("title")
            .text(d => `${d.properties.name}: ${bookCountByCountry[d.properties.name] || 0} books`);
    });
</script>

<style>
    #map {
        width: 100%;
        height: 500px;
        margin: 0 auto;
        position: relative;
    }

    /* Tooltip styling */
    #tooltip {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 5px;
        border-radius: 3px;
        visibility: hidden;
        font-size: 14px;
    }
</style>

<div id="map"></div>
<div id="tooltip"></div>