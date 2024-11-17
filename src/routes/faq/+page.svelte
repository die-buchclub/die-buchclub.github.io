<script lang="ts">
    import Layout from "$lib/layout.svelte";
    import Questions from "$lib/assets/faqs.json";
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

        .faqs {
            padding: 20px;
        }

        .faq {
            margin-top: 5px;
        }
    }
</style>

<Layout>
    <div class="main">
        <h3 class="title">FAQ's</h3>
        <div class="faqs">
            {#each Questions as question}
                <div class="faq collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2"/>
                    <div class="collapse-title text-xl font-medium">{question.title}</div>
                    <div class="collapse-content">
                        {#if Array.isArray(question.content)}
                            <ul>
                                {#each question.content as line}
                                    <li>{line}</li>
                                {/each}
                            </ul>
                        {:else}
                            <p>{question.content}</p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</Layout>