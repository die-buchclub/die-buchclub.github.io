---
layout: page
title: FAQ
permalink: /faq/
accordion:
- title: Wie kann ich mitmachen?
  content: 1. [Community beitreten ](https://chat.whatsapp.com/GpDiea8Qhq4HlbLNVWah69)<br> 2. Durch die Gruppen und deren Beschreibung stöbern <br> 3. Einer Treffen-Gruppe beitreten <br> 4. Zum Treffen kommen
- title: Wann kann ich beitreten?
  content: Jederzeit! Die Treffen hängen nicht zusammen. <br> Die nächsten 2 Treffen sind in der Whatsapp-Community erstellt. Das nächste Treffen findet man unter 'Aktuelles Buch & Nächster Termin', aber auch unter den Posts auf der Homepage (auf 'Die Buchlcub' clicken).
- title: Wo finden die Treffen statt?
  content: In einem Cafe in Wien, näheres zu den einzelnen Treffen findet man in der Gruppen-Beschreibung. Remote / über Zoom etc. leider nicht.
- title: Was lest ihr so?
  content: Wir lesen nur Romane von Frauen, die nicht allzu lang sind. Das ist unsere einzigen Kriterien, die Genres sind weit gestreut. <br> Wirf einen Blick auf die Website oder auf Insta für bereits besprochene Bücher.
- title: Was ist eine Whatsapp Community?
  content: Das ist eine Art Gruppe für Gruppen. Wie ein Index, wo man einen Überblick über alle Gruppen hat.
- title: Was sind die Gruppen in der Community?
  content: Das sind gewöhnliche Whatsapp-Gruppen, die für jedes Treffen neu angelegt werden. In der Beschreibung stehen Details zum Treffpunkt / Datum / Uhrzeit. Will man zum Treffen kommen, tritt man der entsprechenden Gruppe bei. <br> So bleibt man immer am neuesten Stand, falls sich was am Plan ändert. <br> Wenn man Fragen zu einem Treffen  hat, ist das die richtige Stelle, um sie zu stellen.
- title: Muss ich beitreten?
  content: Nein, aber es hilft uns sehr! Über die Gruppen schätzen wir ab, wie viele Leute kommen. Bei Bedarf spalten wir das Treffen auf 2 Termine, damit alle zu Wort kommen. Außderdem verpasst du Updates zum Treffen, falls welche kommen.
- title: Ich werde doch nicht kommen, was jetzt?
  content: Ist das Treffen noch am selben Tag, dann bitte kurz eine Nachricht in die Gruppe. Ansonsten einfach aussteigen und wir wissen bescheid. :)
- title: Muss ich immer dabei sein?
  content: Nein. Komm zu den Treffen, auf die du Lust hast. Wenn dir mal ein Buch nicht passt, einfach aufs nächste warten. 
- title: Ich habe nicht zu Ende gelesen...
  content: Kein Problem, solange dir Spoiler nichts ausmachen. Erfahrungsgemäß lesen ca 25-50% nicht zu ende. Es bringen sich trotzdem alle leicht ins Gespräch ein, weil wir uns mehr auf allgemeine Themen fokussieren.
- title: Ich bin keine Frau, kann ich kommen?
  content: JA! Alle Menschen sind herzlich eingeladen.
- title: Kann ich ein Buch vorschlagen?
  content: Wenn es unsere Kriterien erfüllt (Roman, Autorin, unter 350 Seiten) schick mir ne email oder ne DM auf insta. Oder frag mich auf WhatsApp bzw. beim nächsten Treffen dann in Person :)
---


<div class="accordion">
    {% for item in page.accordion %}
    <div class="accordion-item">
        <div class="accordion-title">{{ item.title }}</div>
        <div class="accordion-content">{{ item.content | markdownify }}</div>
    </div>
    {% endfor %}
</div>

<script>
    document.querySelectorAll('.accordion-title').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            // Toggle the display property between 'block' and 'none'
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
</script>

<style>
.accordion {
    margin: 20px 0;
}

.accordion-item {
    border-bottom: 1px solid #ddd;
}

.accordion-title {
    cursor: pointer;
    padding: 10px;
    font-weight: 600;
    background-color: #f7f7f7;
}

/* Accordion content is hidden by default */
.accordion-content {
    display: none;
    padding: 10px;
}
</style>