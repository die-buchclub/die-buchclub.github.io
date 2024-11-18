<script>
    import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
    import { base } from '$app/paths';
</script>

<style>
    .header {
        box-shadow: 2px 2px 2px rgba(102, 102, 102, 0.2);
    }
    .icon {
        width: 36px;
        height: 36px;

    }
</style>

<div class="header navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="{base}/join">Über uns</a></li>
                <li><a href="{base}/shelf">Unser Bücherregal</a></li>
                <li><a href="{base}/faq">FAQ</a></li>
                <li><a href="{base}/femcrit">Feministische Literaturkritik</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost text-xl" href="{base}/">Die Buchclub</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="{base}/join">Über uns</a></li>
            <li><a href="{base}/shelf">Unser Bücherregal</a></li>
            <li><a href="{base}/faq">FAQ</a></li>
            <li><a href="{base}/femcrit">Feministische Literaturkritik</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn btn-neutral" href="https://chat.whatsapp.com/GpDiea8Qhq4HlbLNVWah69">
            <div class="icon">
                <FaWhatsapp/>
            </div>
        </a>
    </div>
</div>