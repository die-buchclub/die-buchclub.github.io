<script lang="ts">
    import Layout from "$lib/layout.svelte";
    import FaQuestion from "svelte-icons/fa/FaQuestion.svelte";
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
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
        }

        .card {
            margin: 20px;
        }

        .examples {
            width: 80%;
        }

        .timeline-middle {
            width: 20px;
            height: 20px;
        }
    }
</style>

<Layout>
    <div class="main">
        <h3 class="title">Feministische Literaturkritik</h3>
        <div class="about">
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Nochmal von Vorne...</h2>
                    <p>In unserem Kontext meinen wir mit ‘Feminismus’ eine vielfältige Ansammlung an feministischen
                        Theorien, statt z.B. eine soziale Bewegung.</p>
                </div>
            </div>
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">No na ned, was hat das mit Kritik zu tun?</h2>
                    <p>Einen Text kann man aus unterschiedlichen Winkeln beleuchten (bspw.:
                        marxistische/psychoanalytische/postkoloniale/uvm. Literaturkritik).</p>
                </div>
            </div>
            <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Was wollt ihr jetzt von mir?</h2>
                    <p>In der feministischen Literaturkritik gits keine Einheitlichen vorgaben.</p>
                    <p>Wir setzten uns den ‘Feminismus Hut’ auf und reden über alles, was uns so auffällt. </p>
                    <p>Was das ganze besonders spannend macht, denn jede* und jeder* hat einen ganz persönlich
                        einzigartigen Zugang dazu.</p>
                </div>
            </div>

            <div class="examples card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Beispiel-Fragen, die man sich beim Lesen stellen kann:</h2>
                    <p>Das ist kein muss, wer aber Lust darauf hat und noch Anregung braucht, hier ein paar Ideen:</p>

                    <ul class="timeline timeline-vertical">
                        <li>
                            <div class="timeline-start timeline-box">Aus wessen Perspektive wird erzählt?</div>
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <div class="timeline-end timeline-box">Welche Themen werden behandelt? Was nimmst du für dich mit?</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-start timeline-box">Welche Frauenfiguren gibt es? Wer sind sie?</div>
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <div class="timeline-end timeline-box">Wie werden Geschlechterrollen und Klischees behandelt?</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-start timeline-box">Gibt es intersektionale Aspekte? (Z.B. Klasse, Ethnie, Sexualität, etc) </div>
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <FaQuestion></FaQuestion>
                            </div>
                            <div class="timeline-end timeline-box">Was ist der Kontext der Handlung (historisch, politisch, sozial, kulturell, etc.)</div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</Layout>