export const guides = [
  {
    "id": 1,
    "title": "Erste Schritte in Yapyap: Der ultimative Guide für Steuerung & Einstellungen",
    "iframeUrl": "1",
    "description": "Neu in Yapyap? Dieser Guide hilft angehenden Zauberern, die grundlegende Steuerung und Einstellungen zu meistern! Lerne Zaubersprüche zu wirken (sogar mit defektem Mikrofon!), mit der Umwelt zu interagieren, dein Inventar zu verwalten und vieles mehr. Werde im Handumdrehen zum Yapyap-Profi!",
    "tags": ["yapyap", "erste schritte", "steuerung", "zaubern", "zauberer-spiel"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769068783/cms-uploads/cms-1769068783333-120035290.jpg",
    "imageAlt": "Ein Zauberer wirkt einen Zauberspruch in Yapyap und zeigt das Magiesystem des Spiels.",
    "seo": {
      "title": "Yapyap: Einsteiger-Guide - Steuerung & Zaubersprüche meistern",
      "description": "Neu bei Yapyap? Lerne die wichtigsten Steuerungen, Einstellungen (inklusive Mikrofon-Fix!), Inventarverwaltung und elementare Interaktionen in diesem Guide für Anfänger.",
      "keywords": "yapyap, erste schritte, yapyap steuerung, zaubersprüche, sprachsteuerung, inventar, elementare interaktionen, zauberer-spiel, magie"
    },
    "isHome": true,
    "addressBar": "getting-started-yapyap-essential-controls-settings-guide",
    "detailsHtml": `
  <div class="yapyap-guide-container">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/AwtB8ZWk264" title="Yapyap Beginner's Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <p style="margin: 1em 0px;">Willkommen bei <strong>Yapyap</strong>! Die Welt ist magisch, aber die Steuerung kann für neue Zauberer anfangs etwas knifflig sein. Bevor du dich in den Kampf gegen Kobolde stürzt, musst du deine Einstellungen korrekt konfigurieren. Dieser Guide deckt die Grundlagen der Bewegung, des Inventars und die wichtigste Einstellung ab: das <strong>Wirken von Zaubersprüchen</strong>.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Wichtige Einstellungen: Mikrofon &amp; Zaubersprüche fixen</h2>
      <p style="margin: 1em 0px;">Standardmäßig erwartet Yapyap, dass du Zaubersprüche in dein Mikrofon rufst. Wenn dein Mikrofon nicht funktioniert oder du einen ruhigeren Spielstil bevorzugst, solltest du diese Einstellung sofort ändern.</p>
      <ul>
          <li>Gehe zu <strong>Settings</strong> &gt; <strong>Accessibility</strong>.</li>
          <li>Suche nach <strong>\"Voice Spell Select\"</strong>.</li>
          <li><strong>Empfohlene Aktion:</strong> Aktiviere die zweite Option – <strong>\"Hold Right Mouse Button for Spell\"</strong>.</li>
      </ul>
      <p style="margin: 1em 0px;">Dies ermöglicht es dir, Magie durch Halten der <kbd>rechten Maustaste</kbd> zu wirken, anstatt zu sprechen, was für Anfänger deutlich zuverlässiger ist.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Grundsteuerung &amp; Bewegung</h2>
      <p style="margin: 1em 0px;">Die Beherrschung der Bewegung ist der Schlüssel zum Überleben. Beachte, dass sich die Physik in Yapyap etwas \"schwebend\" anfühlen kann, also ist Geduld gefragt.</p>
      <ul>
          <li><strong>Bewegen:</strong> <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd></li>
          <li><strong>Greifen / Interagieren:</strong> <kbd>Linksklick</kbd> halten. (Warte einen kurzen Moment, bis der Gegenstand registriert wird, bevor du ihn ziehst).</li>
          <li><strong>Gegenstand aufheben:</strong> Drücke <kbd>E</kbd>. (Drücke erneut, um ihn sanft fallen zu lassen).</li>
      </ul>
  
      <div class="pro-tip-box">
          <span class="pro-tip-title">🔥 Fortgeschrittene Mechanik: Der aufgeladene Wurf</span>
          Um einen Gegenstand zu werfen, drücke <kbd>Q</kbd>. Wenn du jedoch <strong><kbd>Q</kbd> gedrückt hältst</strong>, kannst du deinen Wurf aufladen! Dies erhöht die Distanz und Kraft, was entscheidend für Rätsel oder das Zuwerfen von Gegenständen an Teammitglieder ist.
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">3. Elementare Interaktionen (Feuerstäbe)</h2>
      <p style="margin: 1em 0px;">Das Spiel bietet Umweltinteraktionen, die im Tutorial nicht erklärt werden. Wenn du einen <strong>Feuerstab</strong> oder einen Holzstock findest, der nicht brennt:</p>
      <ol>
          <li>Suche ein Lagerfeuer oder eine Wandfackel.</li>
          <li><strong>Wirf (<kbd>Q</kbd>)</strong> den Stab durch die Flamme.</li>
          <li>Der Gegenstand fängt Feuer und brennt wieder!</li>
      </ol>
      <p style="margin: 1em 0px;"><em>Warnung: Achte darauf, keine explosiven Gegenstände ins Feuer zu werfen!</em></p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">4. Inventar- &amp; Handmanagement</h2>
      <p style="margin: 1em 0px;">Dein Inventar ist aufgeteilt in deinen <strong>Rucksack</strong> und deine <strong>Hände</strong>. Das zu verstehen, ist überlebenswichtig im Kampf.</p>
      <ul>
          <li><strong>Rucksack-Slots:</strong> Tasten <kbd>1</kbd>, <kbd>2</kbd> und <kbd>3</kbd>.</li>
          <li><strong>Haupthand (Rechts):</strong> Dies ist die aktive Hand zum Benutzen von Zauberstäben.</li>
          <li><strong>Nebenhand (Links):</strong> Wird zum Tragen zusätzlicher Gegenstände verwendet.</li>
          <li><strong>Hände tauschen:</strong> Drücke <kbd>F</kbd>.</li>
      </ul>
      <p style="margin: 1em 0px;"><strong>Warum ist <kbd>F</kbd> so wichtig?</strong> Du kannst Zaubersprüche nur mit dem Stab in deiner <em>Haupthand</em> wirken. Wenn dein Stab in der linken Hand ist, drücke F, um ihn zu wechseln!</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">5. Kamera, Emotes &amp; Ragdoll</h2>
      <h3 style="font-size: 1.17em; font-weight: bold;">Kamerasteuerung</h3>
      <ul>
          <li><strong>Ansicht umschalten:</strong> Drücke die <strong>mittlere Maustaste</strong>, um zwischen der Ego-Perspektive (1st Person) und der Verfolger-Perspektive (3rd Person) zu wechseln.</li>
          <li><strong>Selfie-Modus:</strong> Halte die <strong>mittlere Maustaste</strong> gedrückt, um zu deinem Charakter zurückzublicken (nützlich, um zu prüfen, ob Monster hinter dir sind).</li>
      </ul>
  
      <h3 style="font-size: 1.17em; font-weight: bold;">Soziales &amp; Spaß</h3>
      <ul>
          <li><strong>Emotes:</strong> Halte <kbd>T</kbd> gedrückt, um das Emote-Rad zu öffnen (Tanzen, Zeigen, etc.).</li>
          <li><strong>Sich tot stellen (Ragdoll):</strong> Drücke <kbd>V</kbd>.</li>
      </ul>
      <p style="margin: 1em 0px;">Durch Drücken von <kbd>V</kbd> fällst du sofort in sich zusammen. Das macht zwar Spaß, aber sei gewarnt: <strong>Sich tot zu stellen wird ein Monster NICHT täuschen</strong>, wenn es dich bereits gesehen hat!</p>
  
      <hr>
      <p style="margin: 1em 0px;"><em>Bereit für den nächsten Schritt? Schau dir unseren <a href="/guides/scales-ball-puzzle-solution/">Ultimativen Rätsel-Guide</a> an, um das erste Level zu lösen!</em></p>
  </div>`
  },
  {
    "id": 2,
    "title": "Yapyap Secrets Guide: So farmst du 30+ Münzen & fliegst unendlich vor dem Schloss",
    "iframeUrl": "1",
    "description": "Stürze dich nicht sofort ins Schloss! Dieser Yapyap Secrets Guide enthüllt versteckte Schätze in der Startlobby: 20-30 Münzen, kostenlose Zauberstäbe und sogar 50-Gold-Edelsteine. Meistere den Doppelstab-Flugtrick für unendliches Gleiten! Dominiere Yapyap, bevor du überhaupt richtig anfängst.",
    "tags": ["yapyap geheimnisse", "yapyap guide", "münzen farmen", "unendlich fliegen", "doppelstab trick"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769069595/cms-uploads/cms-1769069594889-927630996.jpg",
    "imageAlt": "Yapyap Gameplay-Screenshot, der einen Charakter im Startwald zeigt und das Potenzial zum Münzenfarmen hervorhebt.",
    "seo": {
      "title": "Yapyap Secrets Guide: Münzen farmen & unendlich fliegen vor dem Schloss!",
      "description": "Entfessle das versteckte Potenzial von Yapyap! Dieser Guide zeigt dir, wie du 30+ Münzen farmst, kostenlose Stäbe erhältst und unendlich fliegst, bevor du das Schloss betrittst.",
      "keywords": "yapyap, geheimnisse, guide, münzen farmen, unendlich fliegen, doppelstab trick, versteckte münzen, händler, edelsteine"
    },
    "isHome": true,
    "addressBar": "yapyap-secrets-guide-how-to-farm-coins-fly-infinitely",
    "detailsHtml": `
  <div class="yapyap-guide-container">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/MYaHSR8pQUY" title="Yapyap Secrets Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <h1 style="font-size: 2em; font-weight: bold;">Yapyap Geheimnisse: Münzen farmen &amp; Fliegen vor dem Schlossbetritt</h1>
      
      <p style="margin: 1em 0px;">Die meisten Spieler rennen sofort ins Schloss, aber das ist ein Anfängerfehler! Die Startlobby in <strong>Yapyap</strong> verbirgt tatsächlich <strong>20 bis 30 Münzen</strong>, kostenlose Zauberstäbe und sogar seltene <strong>Edelsteine</strong> im Wert von 50 Gold. Wenn du nur 2 Minuten hier farmst, kannst du mächtige Ausrüstung kaufen, bevor das Spiel überhaupt richtig losgeht.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Versteckte Münzfundorte in der Lobby</h2>
      <p style="margin: 1em 0px;">Ignoriere den Startwald nicht. Hier gibt es schnelles Geld:</p>
      <ul>
          <li><strong>Kostenloser Zauberstab-Baum:</strong> Suche den Baum mit der Aufschrift \"Free Wands\". Du kannst Äste abbrechen, um einfache Stäbe kostenlos zu erhalten. Selbst wenn du sie nicht benutzt, kannst du sie verkaufen!</li>
          <li><strong>Hinter dem Schild:</strong> Gehe hinter das \"Respawn Point\"-Schild. Dort liegen meist <strong>10 Münzen</strong> im Gras versteckt.</li>
          <li><strong>Die Lagerfeuer-Truhe:</strong> Schau hinter den Händler beim Lagerfeuer. Auf der Holzkiste findest du einen Stapel von <strong>11 Münzen</strong>.</li>
      </ul>
  
      <div class="secret-box">
          <span class="secret-title">💰 Das 50-Gold-Edelstein-Geheimnis</span>
          <p style="margin: 1em 0px;">Dies ist das größte Geheimnis in der Demo. Plündere die Kiste nicht nur – <strong>zerstöre sie!</strong></p>
          <p style="margin: 1em 0px;">Nimm Holzkisten oder Eimer und wirf sie ins Feuer oder schlage sie gegen einen Felsen. Darin hast du die Chance, einen <strong>roten Edelstein</strong> zu finden. Wenn du diesen Edelstein wirfst, erhältst du sofort <strong>50 Münzen</strong>!</p>
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Geld verdienen: Verkauf beim Händler</h2>
      <p style="margin: 1em 0px;">Der mysteriöse Händler kauft fast alles. Das ist ein guter Weg, um dein Inventar zu leeren:</p>
      <ul>
          <li><strong>Pilze:</strong> Werden für 1 Münze verkauft.</li>
          <li><strong>Einfache Holzstäbe:</strong> Werden für 2 Münzen verkauft.</li>
      </ul>
      <p style="margin: 1em 0px;">Um zu verkaufen, halte den Gegenstand einfach in der Hand, schau den Händler an und du siehst die Einblendung <strong>\"Sell\"</strong>.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">3. Der \"Doppelstab\" Unendlich-Flugtrick</h2>
      <p style="margin: 1em 0px;">Willst du hohe Orte erreichen oder schwierige Parkour-Abschnitte überspringen? Du kannst Flugzauber verketten, wenn du <strong>zwei Zauberstäbe</strong> hast, da deren Abklingzeiten getrennt sind.</p>
      
      <div class="flight-box">
          <h3 style="font-size: 1.17em; font-weight: bold;">🚀 So fliegst du höher (Combo-Guide)</h3>
          <p style="margin: 1em 0px;"><strong>Voraussetzung:</strong> Zwei einfache Zauberstäbe (einer in der Haupthand, einer in der Nebenhand).</p>
          <ol>
              <li>Wirke <strong>Tornado</strong> (Zauber unten links), um dich in die Luft zu katapultieren.</li>
              <li>Wirke <strong>Up-Dog</strong> (Zauber unten rechts), um höher zu schweben.</li>
              <li>Drücke in der Luft <kbd>F</kbd>, um die Hände zu tauschen.</li>
              <li>Wirke sofort wieder <strong>Up-Dog</strong> mit deinem zweiten Stab!</li>
          </ol>
          <p style="margin: 1em 0px;">Diese Combo ermöglicht es dir, drei Stufen hoch zu fliegen, wodurch du das Schlossdach oder Geheimnisse spielend erreichst.</p>
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">Zusammenfassung</h2>
      <p style="margin: 1em 0px;">Mit diesen Strategien kannst du die erste Nacht mit vollem Inventar und genug Gold für einen spezialisierten Stab beginnen. Vergiss nicht, jedes Mal nach dem Respawn am <strong>Free Wands</strong> Baum vorbeizuschauen!</p></div>`
  },
  {
    "id": 3,
    "title": "Yapyap Nacht 1 Survival-Guide: Die \"Unendlich-Flug\" Strategie & Beste Loot-Routen",
    "iframeUrl": "1",
    "description": "Die erste Nacht in Yapyap bestimmt das Tempo für deinen gesamten Run. Viele neue Zauberer sterben, weil sie den Ausgang nicht finden oder vom Clown-Mädchen in die Enge getrieben werden. Dieser Guide beschreibt die \"Standard-Eröffnung\", die Profi-Spieler nutzen, um 800+ Punkte und eine sichere Extraktion in unter 5 Minuten zu garantieren.",
    "tags": ["erste", "nacht", "yapyap", "tempo", "survival"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769070237/cms-uploads/cms-1769069594889-927630996.jpg",
    "imageAlt": "Yapyap Tag 1 Survival-Guide",
    "isHome": true,
    "seo": {
      "title": "Yapyap Nacht 1 Guide: Unendlich fliegen, Loot-Spots & Flucht-Strategie",
      "description": "Überlebe Tag 1 in Yapyap mit unserem Profi-Guide. Lerne den Doppelstab-Flugtrick, finde versteckten Loot in Waschräumen und erkenne den Blauen Fluchtturm.",
      "keywords": "yapyap nacht 1, unendlich fliegen, flugtrank, yapyap fluchtturm, waschbecken loot"
    },
    "addressBar": "yapyap-Night-1-Survival-Guide",
    "detailsHtml": `
<p style="margin: 1em 0px;">
  Die erste Nacht in <strong>Yapyap</strong> bestimmt das Tempo für deinen gesamten Run. Viele Spieler verirren sich im Schlosslabyrinth oder werden von Feinden in die Enge getrieben. Dieser Guide enthüllt die \"Standard-Eröffnung\", die von Profis genutzt wird, um 800+ Punkte und eine sichere Extraktion in unter 5 Minuten zu erreichen.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>1. Die \"Standard-Vorbereitung\"</strong>
</h2>

<p style="margin: 1em 0px;">
  Erfolg beginnt, bevor du dich überhaupt ins Schloss teleportierst. Folge dieser Checkliste in der Lobby:
</p>

<ol>
  <li>
    <strong>Schnapp dir zwei Zauberstäbe:</strong> Nimm nicht nur einen. Brich <strong>zwei identische Äste</strong> vom \"Free Wands\"-Baum ab. Das ist essenziell für den Flugtrick.
  </li>
  <li>
    <strong>Farme die Lobby:</strong> Sammle die 21 Münzen hinter dem Schild und auf der Lagerfeuer-Truhe.
  </li>
  <li>
    <strong>Kaufe den Flugtrank:</strong> Nutze deine Münzen, um den <strong>großen blauen Trank</strong> beim Händler zu kaufen. Das ist dein Sicherheitsnetz, um den Ausgang zu finden.
  </li>
</ol>

<p style="margin: 1em 0px;">
  🚀 Der Doppelstab-Unendlich-Flugtrick  
  Der Standard-\"Up-Dog\"-Zauber hat eine Abklingzeit, aber das Wechseln der Stäbe umgeht diese. Hier ist die Combo, um die Schlossdecke zu erreichen:
</p>

<ol>
  <li>
    <strong>Wirke Tornado</strong> (Zauber unten links), um dich in die Luft zu katapultieren.
  </li>
  <li>
    <strong>Wirke Up-Dog</strong> (Zauber unten rechts), um höher zu schweben.
  </li>
  <li>
    Drücke in der Luft <strong>F</strong>, um auf deinen zweiten Stab zu wechseln.
  </li>
  <li>
    <strong>Wirke sofort wieder Up-Dog!</strong>
  </li>
</ol>

<p style="margin: 1em 0px;">
  Dies erlaubt es dir, drei Stufen hoch zu fliegen, Treppen zu überspringen und vor Bodenfeinden sicher zu bleiben.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>2. Beste Loot-Routen &amp; Punkte farmen</strong>
</h2>

<p style="margin: 1em 0px;">
  Verschwende keine Zeit damit, jede einzelne Holzkiste zu zertrümmern. Konzentriere dich auf diese hocheffizienten Punktquellen:
</p>

<h3 style="font-size: 1.17em; font-weight: bold;">
  <strong>Der Waschraum</strong>
</h3>

<p style="margin: 1em 0px;">
  Dieser Raum ist eine Goldgrube. Suche die Reihe von Waschbecken. Nutze deinen <strong>Tornado</strong>-Zauber, um auf die zentrale Säule oder den Bereich der Waschbecken zu springen – dort spawnen oft <strong>11 Bonusmünzen</strong>.
</p>

<h3 style="font-size: 1.17em; font-weight: bold;">
  <strong>Gemälde kostenlos verbrennen</strong>
</h3>

<p style="margin: 1em 0px;">
  Spare deine Fackel! Wenn du ein Gemälde oder einen Wandteppich siehst:
</p>

<ol>
  <li>
    Nimm es von der Wand (Linksklick).
  </li>
  <li>
    Halte es an eine nahegelegene <strong>Wandlampe</strong> oder Kerze.
  </li>
  <li>
    Es wird sofort verbrennen und dir Punkte einbringen, ohne deine eigenen Ressourcen zu verbrauchen.
  </li>
</ol>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>3. Überleben &amp; das \"Clown-Mädchen\"</strong>
</h2>

<p style="margin: 1em 0px;">
  <strong>⚠️ GEFAHR: Das Clown-Mädchen</strong>
</p>

<p style="margin: 1em 0px;">
  Wenn du schwere, stampfende Schritte hörst, fliege sofort nach oben. Das Clown-Mädchen ist ein schneller, schwerer Gegner, der dich <strong>sofort töten</strong> kann. Versuche nicht, sie mit einem Holzstab zu bekämpfen.
</p>

<p style="margin: 1em 0px;">
  Behalte immer die obere linke Ecke deines Bildschirms im Auge. Wenn sich der Status von <em>\"Chilling\"</em> zu <strong>\"Suspicious\"</strong> ändert, bedeutet das, dass ein Gegner in der Nähe gespawnt ist.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>4. Wie man entkommt (Extraktion)</strong>
</h2>

<p style="margin: 1em 0px;">
  Sobald du deine Punktequote erreicht hast (meist durch das Verbrennen von Büchern oder das Abschließen der rechts angezeigten Nebenquest), musst du verschwinden.
</p>

<ol>
  <li>
    <strong>Schau nach oben:</strong> Wenn du im Freien oder in der Haupthalle bist, suche nach einem Turm mit einem <strong>blau funkelnden Dach</strong>.
  </li>
  <li>
    <strong>Nutze deinen Trank:</strong> Wenn du dich verirrt hast, trinke deinen <strong>Flugtrank</strong> und fliege gerade nach oben, um das blaue Funkeln zu entdecken.
  </li>
  <li>
    <strong>Teleportieren:</strong> Stelle dich in den lila Kreis am Fuß des Turms, um die Nacht zu beenden.
  </li>
</ol>

<p style="margin: 1em 0px;">
  <em>
    Nacht 1 gemeistert? Schau dir unseren 
    <a href="/wiki/monsters/" rel="noopener noreferrer" target="_blank">Monster-Guide</a> 
    an, um dich auf die Schrecken von Nacht 2 vorzubereiten!
  </em>
</p>
    `
  }



  // {
  //   id: 1,
  //   title: "",
  //   description: "",
  //   tags: [""],
  //   publishDate: "2026-01-22",
  //   imageUrl: "/images/guide/guide01.webp",
  //   imageAlt: "",
  //   isHome: true,
  //   seo: {
  //     title: "",
  //     description: "",
  //     keywords: ""
  //   },
  //   addressBar: "",
  //   detailsHtml: `
  //   `
  // },

]
