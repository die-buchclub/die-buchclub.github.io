<script>
    import Layout from "$lib/layout.svelte";
    import { base } from '$app/paths';
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

        .about {
            margin-top: 5px;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .card {
            width: 100%;
        }
    }
</style>


<Layout>
    <div class="main">
        <h3 class="title">Über uns</h3>
        <div class="about">
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Wer?</h2>
                    <p>Es sind alle Interresierten, ob Frau* oder nicht, herzlich eingeladen sich zu uns dazuzusetzen und mitzureden! </p>
                    <h2 class="card-title">Wann?</h2>
                    <p>Wir sprechen etwa einmal im Monat über Romane von Frauen aus einer feministischen Perspektive. </p>
                    <h2 class="card-title">Was?</h2>
                    <p>Es wird keine Theorie abgeprüft, wir bleiben in der Welt der Fiction. Wir wollen wissen, was DEINE kritische, feministische Lesestimme zu den Büchern zu sagen hat. </p>
                    <h2 class="card-title">Wie?</h2>
                    <p>Interessiert? Dann runterscrollen und <strong> der WhatsApp Community beitreten</strong>  , um auf dem neuesten Stand zu bleiben</p>
                    <p>Dort gibt es eine menge Treffen, für die man sich per Beitritt zur Gruppe anmelden kann</p>
                </div>
            </div>
        </div>
        <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-primary">Ich will beitreten, gib mit die Einladung!</div>
        </div>
        <div class="chat chat-end">
            <div class="chat-bubble chat-bubble-info">
                <a class="btn" href="https://chat.whatsapp.com/GpDiea8Qhq4HlbLNVWah69">
                    Bitteschön, einmal hier clicken
                </a>
            </div>
        </div>
        <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-secondary">
                Moment, muss ich wegen meiner Privatsphäre aufpassen?
            </div>
        </div>

        <div class="chat chat-end">
            <div class="chat-bubble chat-bubble-success"> In einer Whatsapp Community ist deine Telefonnummer geschützt, nur der Administrator kann sie sehen. Wenn du einer Gruppe innerhalb der Community beitritts, wird sie jedoch für die anderen Mitglieder der Gruppe sichtbar.</div>
        </div>
        <div class="chat chat-start">
            <div class="chat-bubble chat-bubble-accent">
                Ich habe noch Fragen!
            </div>
        </div>
        <div class="chat chat-end">
            <div class="chat-bubble chat-bubble-warning">
                <p>Helfen dir die <a href="{base}/faq">FAQ's</a> nicht weiter?</p>
                <p>
                    Dann schreib uns doch gern auf Instagram unter
                <a href="https://www.instagram.com/diebuchclub/">@diebuchclub</a> oder ne mail an die-buchclub.vie@gmail.com
            </p>
            </div>
        </div>
    </div>
</Layout>