<script>
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
    import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
    import {clickToCopyWithTooltip} from '../services/click-to-copy.service.ts';
    import BookIcon from '$lib/assets/favicon.png';
</script>

<style>
    .logo {
        width: 60px;
        height: auto;
    }

    .icon {
        width: 36px;
        height: auto;
    }

    .btn-link {
        padding-left: 0;
        padding-top: 0;
    }
</style>

<footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
        <img src="{BookIcon}" alt="logo" class="logo"/>
        <p>
            Die Buchclub
            <br/>
            <a class="btn btn-link" use:clickToCopyWithTooltip={'die-buchclub.vie@gmail.com'}>
                die-buchclub.vie@gmail.com
            </a>
        </p>
    </aside>
    <nav>

    </nav>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a class="btn" href="https://www.instagram.com/diebuchclub/">
            <div class="icon">
                <FaInstagram/>
            </div>
        </a>
        <a class="btn" href="https://chat.whatsapp.com/GpDiea8Qhq4HlbLNVWah69">
            <div class="icon">
                <FaWhatsapp/>
            </div>
        </a>
    </nav>
</footer>