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

    let svg; // Reference to the SVG element
    let projection; // Reference to the map projection
    let path; // Reference to the path generator
    let geojson; // Reference to the loaded GeoJSON data

    const renderMap = () => {
        const container = document.getElementById('map');
        const width = container.clientWidth;
        const height = Math.min(width / 2, 500); // Maintain aspect ratio and limit height

        // Adjust projection based on new dimensions
        projection = d3.geoMercator()
            .scale((width / 960) * 150) // Scale based on the original width
            .translate([width / 2, height / 2]);

        path = d3.geoPath().projection(projection);

        // Clear existing SVG
        d3.select('#map svg').remove();

        // Create a new SVG container
        svg = d3.select('#map')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Add countries to the map
        svg.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", d => {
                const countryName = d.properties.name;
                const bookCount = bookCountByCountry[countryName] || 0;
                return bookCount > 0 ? "#69b3a2" : "#ccc"; // Green for countries with books, grey for others
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
    };

    onMount(async () => {
        // Load the GeoJSON data for the world map
        geojson = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");

        renderMap(); // Render the map initially

        // Add a resize listener
        window.addEventListener('resize', renderMap);

        return () => {
            window.removeEventListener('resize', renderMap);
        };
    });
</script>

<style>
    #map {
        width: 100%;
        height: auto;
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

    /* Ensure the SVG scales well on small screens */
    svg {
        display: block;
        max-width: 100%;
        height: auto;
    }
</style>

<div id="map"></div>
<div id="tooltip"></div>