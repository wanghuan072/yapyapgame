export const guides = [
  {
    "id": 1,
    "title": "Bien démarrer dans Yapyap : Guide essentiel des commandes et paramètres",
    "iframeUrl": "1",
    "description": "Nouveau sur Yapyap ? Ce guide aide les sorciers novices à maîtriser les commandes et paramètres essentiels ! Apprenez à lancer des sorts (même avec un micro défaillant !), interagir avec l'environnement, gérer votre inventaire, et plus encore. Devenez un pro de Yapyap en un rien de temps !",
    "tags": ["yapyap", "bien démarrer", "commandes", "lancement de sorts", "jeu de sorcier"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769068783/cms-uploads/cms-1769068783333-120035290.jpg",
    "imageAlt": "Un sorcier lance un sort dans Yapyap, illustrant le système de magie du jeu.",
    "seo": {
      "title": "Yapyap : Guide de démarrage - Maîtrisez les commandes et le lancement de sorts",
      "description": "Nouveau sur Yapyap ? Apprenez les commandes essentielles, les paramètres (incluant le correctif micro !), la gestion d'inventaire et les interactions élémentaires dans ce guide pour débutants.",
      "keywords": "yapyap, bien démarrer, commandes yapyap, lancement de sorts, incantation vocale, inventaire, interactions élémentaires, jeu de sorcier, magie"
    },
    "isHome": true,
    "addressBar": "getting-started-yapyap-essential-controls-settings-guide",
    "detailsHtml": `
  <div class="yapyap-guide-container">
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/AwtB8ZWk264" title="Yapyap Beginner's Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <p style="margin: 1em 0px;">Bienvenue dans <strong>Yapyap</strong> ! Le monde est magique, mais les commandes peuvent être un peu déroutantes pour les nouveaux sorciers. Avant de vous précipiter pour combattre des Gobelins, vous devez configurer vos paramètres correctement. Ce guide couvre les bases du mouvement, de l'inventaire et du paramètre le plus important : le <strong>Lancement de Sorts</strong>.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Paramètres essentiels : Corriger votre micro et vos sorts</h2>
      <p style="margin: 1em 0px;">Par défaut, Yapyap s'attend à ce que vous criiez les sorts dans votre microphone. Mais si votre micro ne fonctionne pas, ou si vous préférez un style de jeu plus calme, vous devez modifier ce paramètre immédiatement.</p>
      <ul>
          <li>Allez dans <strong>Settings</strong> (Paramètres) &gt; <strong>Accessibility</strong> (Accessibilité).</li>
          <li>Localisez <strong>"Voice Spell Select"</strong>.</li>
          <li><strong>Action recommandée :</strong> Activez la deuxième option – <strong>"Hold Right Mouse Button for Spell"</strong> (Maintenir le bouton droit de la souris pour le sort).</li>
      </ul>
      <p style="margin: 1em 0px;">Cela vous permet de lancer de la magie en maintenant le <kbd>Clic Droit</kbd> au lieu de parler, ce qui est beaucoup plus fiable pour les débutants.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Commandes de base et déplacements</h2>
      <p style="margin: 1em 0px;">Maîtriser le mouvement est la clé pour survivre à la nuit. Notez que la physique dans Yapyap peut sembler un peu « flottante », la patience est donc de mise.</p>
      <ul>
          <li><strong>Déplacement :</strong> <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> (ou ZQSD selon votre clavier)</li>
          <li><strong>Saisir / Interagir :</strong> Maintenez le <kbd>Clic Gauche</kbd>. (Attendez une fraction de seconde pour que l'objet soit enregistré avant de le faire glisser).</li>
          <li><strong>Ramasser un objet :</strong> Appuyez sur <kbd>E</kbd>. (Appuyez à nouveau pour le poser délicatement).</li>
      </ul>
  
      <div class="pro-tip-box">
          <span class="pro-tip-title">🔥 Mécanique avancée : Le Lancer Chargé</span>
          Pour lancer un objet, appuyez sur <kbd>Q</kbd>. Cependant, si vous <strong>maintenez <kbd>Q</kbd></strong>, vous pouvez charger votre lancer ! Cela augmente la distance et la puissance, ce qui est crucial pour résoudre des énigmes ou lancer des objets à vos coéquipiers.
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">3. Interactions élémentaires (Bâtons de feu)</h2>
      <p style="margin: 1em 0px;">Le jeu propose des interactions environnementales qui ne sont pas expliquées dans le tutoriel. Si vous trouvez un <strong>Bâton de feu</strong> ou un bâton en bois qui n'est pas allumé :</p>
      <ol>
          <li>Trouvez un feu de camp ou une torche murale.</li>
          <li><strong>Lancez (<kbd>Q</kbd>)</strong> le bâton à travers la flamme.</li>
          <li>L'objet prendra feu et se rallumera !</li>
      </ol>
      <p style="margin: 1em 0px;"><em>Attention : Veillez à ne pas jeter d'objets explosifs dans le feu !</em></p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">4. Gestion de l'inventaire et des mains</h2>
      <p style="margin: 1em 0px;">Votre inventaire est divisé entre votre <strong>Sac à dos</strong> et vos <strong>Mains</strong>. Comprendre cela est vital pour le combat.</p>
      <ul>
          <li><strong>Emplacements sac à dos :</strong> Touches <kbd>1</kbd>, <kbd>2</kbd>, et <kbd>3</kbd>.</li>
          <li><strong>Main principale (Droite) :</strong> C'est la main active pour utiliser les baguettes.</li>
          <li><strong>Main secondaire (Gauche) :</strong> Utilisée pour porter des objets supplémentaires.</li>
          <li><strong>Changer de main :</strong> Appuyez sur <kbd>F</kbd>.</li>
      </ul>
      <p style="margin: 1em 0px;"><strong>Pourquoi <kbd>F</kbd> est-il important ?</strong> Vous ne pouvez lancer des sorts qu'avec la baguette dans votre <em>main principale</em>. Si votre baguette est dans votre main gauche, appuyez sur F pour l'échanger !</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">5. Caméra, émotes et Ragdoll</h2>
      <h3 style="font-size: 1.17em; font-weight: bold;">Commandes de caméra</h3>
      <ul>
          <li><strong>Changer de vue :</strong> Appuyez sur le <kbd>Bouton central de la souris</kbd> pour basculer entre la 1ère et la 3ème personne.</li>
          <li><strong>Mode Selfie :</strong> Maintenez le <kbd>Bouton central de la souris</kbd> pour regarder derrière votre personnage (utile pour vérifier si des monstres vous suivent).</li>
      </ul>
  
      <h3 style="font-size: 1.17em; font-weight: bold;">Social et Fun</h3>
      <ul>
          <li><strong>Émotes :</strong> Maintenez <kbd>T</kbd> pour ouvrir la roue des émotes (Danse, Pointer, etc.).</li>
          <li><strong>Faire le mort (Ragdoll) :</strong> Appuyez sur <kbd>V</kbd>.</li>
      </ul>
      <p style="margin: 1em 0px;">Appuyer sur <kbd>V</kbd> vous fait instantanément vous effondrer. Bien que ce soit amusant, attention : <strong>faire le mort ne dupera PAS un monstre</strong> s'il vous a déjà vu !</p>
  
      <hr>
      <p style="margin: 1em 0px;"><em>Prêt pour l'étape suivante ? Consultez notre <a href="/guides/scales-ball-puzzle-solution/">Guide ultime des énigmes</a> pour résoudre le premier niveau !</em></p>
  
  </div>`
  },
  {
    "id": 2,
    "title": "Guide des secrets de Yapyap : Comment farmer plus de 30 pièces et voler à l'infini avant le château",
    "iframeUrl": "1",
    "description": "Ne vous précipitez pas dans le château ! Ce guide des secrets de Yapyap dévoile les trésors cachés du hall de départ : 20-30 pièces, des baguettes gratuites et même des gemmes de 50 pièces d'or. Maîtrisez l'astuce de la double baguette pour un vol infini ! Dominez Yapyap avant même de commencer.",
    "tags": ["secrets yapyap", "guide yapyap", "farm de pièces", "vol infini", "astuce double baguette"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769069595/cms-uploads/cms-1769069594889-927630996.jpg",
    "imageAlt": "Capture d'écran du gameplay de Yapyap montrant un personnage dans la zone forestière de départ, soulignant le potentiel de farm de pièces.",
    "seo": {
      "title": "Guide des secrets de Yapyap : Farmez des pièces et volez à l'infini avant le château !",
      "description": "Débloquez le potentiel caché de Yapyap ! Ce guide révèle comment farmer plus de 30 pièces, obtenir des baguettes gratuites et voler à l'infini avant d'entrer dans le château. Dominez le jeu !",
      "keywords": "yapyap, secrets, guide, farm de pièces, vol infini, astuce double baguette, pièces cachées, marchand, gemmes"
    },
    "isHome": true,
    "addressBar": "yapyap-secrets-guide-how-to-farm-coins-fly-infinitely",
    "detailsHtml": `
  <div class="yapyap-guide-container">
  
      <div class="video-container">
          <iframe src="https://www.youtube.com/embed/MYaHSR8pQUY" title="Yapyap Secrets Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <h1 style="font-size: 2em; font-weight: bold;">Secrets de Yapyap : Comment farmer des pièces et voler avant d'entrer dans le château</h1>
      
      <p style="margin: 1em 0px;">La plupart des joueurs se précipitent immédiatement dans le château, mais c'est une erreur de débutant ! La zone du hall de départ dans <strong>Yapyap</strong> cache en réalité <strong>20 à 30 pièces</strong>, des baguettes gratuites et même des <strong>Gemmes</strong> rares valant 50 pièces d'or. En passant juste 2 minutes à farmer ici, vous pouvez acheter de l'équipement puissant avant même que le jeu ne commence.</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Emplacements des pièces cachées dans le hall</h2>
      <p style="margin: 1em 0px;">N'ignorez pas la forêt de départ. Voici où vous pouvez trouver de l'argent rapide :</p>
      <ul>
          <li><strong>L'arbre aux baguettes gratuites :</strong> Cherchez l'arbre marqué « Free Wands ». Vous pouvez en casser les branches pour obtenir des baguettes de base gratuitement. Même si vous ne les utilisez pas, vous pouvez les vendre !</li>
          <li><strong>Derrière le panneau :</strong> Allez derrière le panneau « Respawn Point ». Il y a généralement <strong>10 pièces</strong> cachées dans l'herbe.</li>
          <li><strong>Le coffre du feu de camp :</strong> Regardez derrière le marchand près du feu de camp. Sur la caisse en bois, vous trouverez une pile de <strong>11 pièces</strong>.</li>
      </ul>
  
      <div class="secret-box">
          <span class="secret-title">💰 Le secret de la gemme à 50 pièces d'or</span>
          <p style="margin: 1em 0px;">C'est le plus grand secret de la démo. Ne vous contentez pas de piller le coffre — <strong>détruisez-le !</strong></p>
          <p style="margin: 1em 0px;">Ramassez les caisses en bois ou les seaux et jetez-les dans le feu ou fracassez-les contre un rocher. À l'intérieur, vous avez une chance de trouver une <strong>Gemme Rouge</strong>. Lancer cette gemme vous rapporte instantanément <strong>50 pièces</strong> !</p>
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Gagner de l'argent : Vendre au marchand</h2>
      <p style="margin: 1em 0px;">Le mystérieux marchand achète presque tout. C'est un excellent moyen de vider votre inventaire :</p>
      <ul>
          <li><strong>Champignons :</strong> Se vendent pour 1 pièce.</li>
          <li><strong>Baguettes en bois de rechange :</strong> Se vendent pour 2 pièces.</li>
      </ul>
      <p style="margin: 1em 0px;">Pour vendre, tenez simplement l'objet en main, regardez le marchand, et vous verrez apparaître une invite <strong>"Sell"</strong> (Vendre).</p>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">3. L'astuce du vol infini à « Double Baguette »</h2>
      <p style="margin: 1em 0px;">Vous voulez atteindre des endroits élevés ou sauter des sections de parkour difficiles ? Vous pouvez enchaîner les sorts de vol si vous possédez <strong>deux baguettes</strong>, car leurs temps de recharge sont séparés.</p>
      
      <div class="flight-box">
          <h3 style="font-size: 1.17em; font-weight: bold;">🚀 Comment voler plus haut (Guide de Combo)</h3>
          <p style="margin: 1em 0px;"><strong>Prérequis :</strong> Deux baguettes de base (une en main principale, une en main secondaire).</p>
          <ol>
              <li>Lancez <strong>Tornado</strong> (sort en bas à gauche) pour vous projeter dans les airs.</li>
              <li>Lancez <strong>Up-Dog</strong> (sort en bas à droite) pour flotter plus haut.</li>
              <li>En plein air, appuyez sur <kbd>F</kbd> pour changer de main.</li>
              <li>Lancez immédiatement <strong>Up-Dog</strong> à nouveau avec votre deuxième baguette !</li>
          </ol>
          <p style="margin: 1em 0px;">Ce combo vous permet de voler sur trois paliers de hauteur, vous permettant d'atteindre le toit du château ou des zones secrètes facilement.</p>
      </div>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">Résumé</h2>
      <p style="margin: 1em 0px;">En utilisant ces stratégies, vous pouvez entamer la première nuit avec un inventaire plein et assez d'or pour acheter une baguette spécialisée. N'oubliez pas de vérifier l'arbre aux baguettes gratuites à chaque réapparition !</p></div>`
  },
  {
    "id": 3,
    "title": "Guide de survie de la Nuit 1 de Yapyap : La stratégie du « Vol Infini » et les meilleures routes de loot",
    "iframeUrl": "1",
    "description": "La première nuit dans Yapyap donne le ton pour toute votre partie. De nombreux nouveaux sorciers meurent parce qu'ils ne trouvent pas la sortie ou se font coincer par la Clown Girl. Ce guide détaille la stratégie d'ouverture standardisée utilisée par les pros pour sécuriser plus de 800 points et une extraction sûre en moins de 5 minutes.",
    "tags": ["première", "nuit", "yapyap", "donne", "ton"],
    "publishDate": "2026-01-22",
    "imageUrl": "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1769070237/cms-uploads/cms-1769070236697-715966904.jpg",
    "imageAlt": "Guide de survie Jour 1 Yapyap",
    "isHome": true,
    "seo": {
      "title": "Guide Nuit 1 Yapyap : Vol infini, spots de loot et stratégie d'évasion",
      "description": "Survivez au Jour 1 de Yapyap avec notre guide pro. Apprenez l'astuce du vol à double baguette, où trouver le loot caché des lavabos, et comment identifier la Tour d'Évasion Bleue.",
      "keywords": "yapyap nuit 1, vol infini, potion de vol, tour d'évasion yapyap, loot lavabo"
    },
    "addressBar": "yapyap-Night-1-Survival-Guide",
    "detailsHtml": `
<p style="margin: 1em 0px;">
  La première nuit dans <strong>Yapyap</strong> donne le ton pour toute votre partie. De nombreux joueurs se perdent dans le labyrinthe du château ou sont acculés par des ennemis. Ce guide révèle l'« Ouverture Standardisée » utilisée par les pros pour sécuriser plus de 800 points et une extraction sûre en moins de 5 minutes.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>1. La préparation « Standardisée »</strong>
</h2>

<p style="margin: 1em 0px;">
  Le succès commence avant même de vous téléporter dans le château. Suivez cette liste de vérification dans le hall :
</p>

<ol>
  <li data-list="bullet">
    <strong>Prenez deux baguettes :</strong> Ne vous contentez pas d'une seule. Cassez <strong>deux branches identiques</strong> de l'arbre aux baguettes gratuites. C'est essentiel pour l'astuce du vol.
  </li>
  <li data-list="bullet">
    <strong>Farmez le hall :</strong> Collectez les 21 pièces cachées derrière le panneau et sur le coffre du feu de camp.
  </li>
  <li data-list="bullet">
    <strong>Achetez la potion de vol :</strong> Utilisez vos pièces pour acheter la <strong>Grande Potion Bleue</strong> auprès du marchand. C'est votre filet de sécurité pour trouver la sortie.
  </li>
</ol>

<p style="margin: 1em 0px;">
  🚀 L'astuce du vol infini à double baguette :
  Le sort « Up-Dog » standard a un temps de recharge, mais changer de baguette permet de le contourner. Voici le combo pour atteindre le plafond du château :
</p>

<ol>
  <li><strong>Lancez Tornado</strong> (sort en bas à gauche) pour vous projeter en l'air.</li>
  <li><strong>Lancez Up-Dog</strong> (sort en bas à droite) pour flotter plus haut.</li>
  <li>Pendant que vous êtes en l'air, appuyez sur F pour passer à votre deuxième baguette.</li>
  <li><strong>Relancez Up-Dog</strong> immédiatement !</li>
</ol>

<p style="margin: 1em 0px;">
  Cela vous permet de voler sur trois niveaux de hauteur, vous permettant d'éviter les escaliers et de rester à l'abri des ennemis au sol.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>2. Meilleures routes de loot et farm de points</strong>
</h2>

<p style="margin: 1em 0px;">
  Ne perdez pas de temps à casser chaque caisse en bois. Concentrez-vous sur ces sources de points à haute efficacité :
</p>

<h3 style="font-size: 1.17em; font-weight: bold;">
  <strong>La salle des lavabos</strong>
</h3>

<p style="margin: 1em 0px;">
  Cette pièce est une mine d'or. Cherchez la rangée d'éviers. Utilisez votre sort <strong>Tornado</strong> pour sauter sur le pilier central ou la zone des éviers — il y a souvent <strong>11 pièces bonus</strong> qui y apparaissent.
</p>

<h3 style="font-size: 1.17em; font-weight: bold;">
  <strong>Brûler des peintures gratuitement</strong>
</h3>

<p style="margin: 1em 0px;">
  Économisez votre torche ! Si vous voyez une peinture ou une tapisserie :
</p>

<ol>
  <li>Saisissez-la sur le mur (Clic gauche).</li>
  <li>Touchez-la contre une <strong>lampe murale</strong> ou une bougie proche.</li>
  <li>Elle brûlera instantanément, vous rapportant des points sans utiliser vos ressources.</li>
</ol>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>3. Survie et la « Clown Girl »</strong>
</h2>

<p style="margin: 1em 0px;">
  <strong>⚠️ DANGER : La Clown Girl</strong>
</p>

<p style="margin: 1em 0px;">
  Si vous entendez des pas lourds et saccadés, envolez-vous immédiatement. La Clown Girl est un ennemi rapide et lourd qui peut vous <strong>tuer instantanément</strong>. N'essayez pas de la combattre avec une baguette en bois.
</p>

<p style="margin: 1em 0px;">
  Gardez toujours un œil sur le coin supérieur gauche de votre écran. Si le statut passe de <em>"Chilling"</em> (Détendu) à <strong>"Suspicious"</strong> (Suspect), cela signifie qu'un ennemi est apparu à proximité.
</p>

<h2 style="font-size: 1.5em; font-weight: bold;">
  <strong>4. Comment s'échapper (Extraction)</strong>
</h2>

<p style="margin: 1em 0px;">
  Une fois que vous avez atteint votre quota de points (généralement en brûlant des livres ou en terminant la quête secondaire affichée à droite), vous devez partir.
</p>

<ol>
  <li data-list="bullet">
    <strong>Regardez en l'air :</strong> Une fois à l'extérieur ou dans le hall principal, cherchez une tour avec un <strong>toit bleu étincelant</strong>.
  </li>
  <li data-list="bullet">
    <strong>Utilisez votre potion :</strong> Si vous êtes perdu, buvez votre <strong>potion de vol</strong> et volez droit vers le haut pour repérer les étincelles bleues.
  </li>
  <li data-list="bullet">
    <strong>Téléportation :</strong> Tenez-vous dans le cercle violet à la base de la tour pour terminer la nuit.
  </li>
</ol>

<p style="margin: 1em 0px;">
  <em>
    Vous maîtrisez la Nuit 1 ? Consultez notre 
    <a href="/wiki/monsters/" rel="noopener noreferrer" target="_blank">Guide des monstres</a> 
    pour vous préparer aux horreurs de la Nuit 2 !
  </em>
</p>
    `
  }
]