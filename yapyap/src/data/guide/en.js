export const guides = [
  {
    id: 5,
    title: "Yapyap Settings Guide: Fix Voice Chat, Motion Sickness & Controls",
    description: "Optimize your Yapyap experience with our ultimate settings guide. Learn how to fix voice recognition, reduce motion sickness by adjusting camera sensitivity, and master essential keybinds like 'Click to Cast' and inventory swapping.",
    tags: ["ultimate", "guide", "yapyap", "game", "settings"],
    publishDate: "2026-02-05",
    imageUrl: "/images/blog/blog05.webp",
    imageAlt: "Professional image of Modern Yapyap Settings Guide: Fix Voice Chat, Motion Sickness & Controls",
    seo: {
      title: "Yapyap Settings Guide: Fix Voice Chat, Motion Sickness & Controls",
      description: "Optimize your Yapyap experience with our ultimate settings guide. Learn how to fix voice recognition, reduce motion sickness by adjusting camera sensitivity, and master essential keybinds like 'Click to Cast' and inventory swapping.",
      keywords: "Yapyap settings guide, Yapyap voice chat fix, Yapyap controls, Yapyap motion sickness, Yapyap spell casting, Yapyap keybinds",
    },
    isHighlight: true,
    addressBar: "yapyap-settings-guide",
    detailsHtml: `<div class="container">
    <p>Yapyap isn't just a game about skill; proper settings can elevate your gaming experience. Whether you want to solve voice recognition issues or optimize your controls, this guide can help.</p>
<div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
  <iframe src="https://www.youtube.com/embed/DSDeSxn4ieA" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
  </iframe>
</div>

    <h2>1. Basic Settings (General &amp; Display)</h2>
    <p>These settings primarily affect your controls and visual experience.</p>

    <h3>View Sensitivity:</h3>
    <ul>
        <li><strong>Function:</strong> Determines your turning speed. If you find turning too slow, increase this value.</li>
        <li><strong>Recommendation:</strong> Adjust according to your mouse DPI and habits. The author recommends <strong>below 15</strong>; don't set it too high to avoid motion sickness.</li>
    </ul>

    <h3>Camera Smoothness:</h3>
    <ul>
        <li><strong>Function:</strong> When you turn the camera, there will be a certain delay and inertia (lag). The higher the value, the more "sticky" the screen; the lower the value, the more immediate the response.</li>
        <li><strong>Recommendation:</strong> If you want precise control, it's recommended to <strong>lower this value</strong> (even to 0) for smoother camera movement. The uploader also recommends setting it below 15.</li>
    </ul>

    <h3>Field of View (FOV):</h3>
    <ul>
        <li><strong>Function:</strong> Determines the breadth of the screen you can see.</li>
        <li><strong>Recommendation:</strong> The uploader usually sets it to around <strong>100</strong>. Especially in third-person view, a higher FOV allows you to see more monsters behind you.</li>
    </ul>

    <h3>Character Color:</h3>
    <ul>
        <li><strong>Function:</strong> Purely a personalization setting, changing the color of your cloak. Just choose one you like!</li>
    </ul>

    <h2>2. Audio Settings</h2>
    <ul>
        <li><strong>Music:</strong> Controls the volume of the background music. If you find the background music too loud and interferes with hearing footsteps, you can turn it down appropriately.</li>
        <li><strong>Sound Effects:</strong> Includes spellcasting sounds, footsteps, interface click sounds, etc. <strong>Very important</strong>; it is recommended to keep the volume high for sound localization.</li>
        <li><strong>Ambient Sound:</strong> Sounds in the environment such as wind and monster cries. If you find the game environment too noisy or chaotic, you can turn this option down appropriately for a quieter experience (although it will sacrifice some immersion).</li>
    </ul>

    <h2>3. Voice and Microphone Settings (Crucial!)</h2>
    <p>Many players have reported no sound when speaking or spells not being recognized, which is most likely due to incorrect settings here.</p>
    <ul>
        <li><strong>Microphone Selection:</strong> In the audio settings, make sure to check that the <strong>Input Device (Microphone)</strong> is selected correctly for the microphone you are currently using.</li>
    </ul>

    <h2>4. Keybinds</h2>
    <p>Besides the regular WASD movement, there are a few special keys to note:</p>

    <h3>V Key (Ragdoll):</h3>
    <ul>
        <li><strong>Function:</strong> Transforms you into a lifeless ragdoll.</li>
        <li><strong>Note:</strong> Must be used <strong>before</strong> being targeted by a monster! If the monster is already chasing you, playing dead won't work; it will still attack you.</li>
    </ul>

    <h3>Number Keys 1, 2, 3:</h3>
    <p>Correspond to the three slots in your inventory (actually, the item held in your right hand).</p>

    <h3>G Key (Task List):</h3>
    <ul>
        <li><strong>Function:</strong> Holds up the contract in your hand to view it.</li>
        <li><strong>Fun Fact:</strong> This contract corresponds to the three tasks on the wooden sign next to the spawn point. Completing them will grant extra rewards.</li>
    </ul>

    <h3>T key (Action Wheel):</h3>
    <ul>
        <li><strong>Operation:</strong> Press and hold T to bring up the wheel, then click to perform an action (e.g., dancing, pointing).</li>
        <li><strong>Easter Egg:</strong> While performing an action, you can rotate the camera 360 degrees for a better view of yourself or to record a video.</li>
    </ul>

    <h3>Left Mouse Button (Grab):</h3>
    <ul>
        <li><strong>Operation:</strong> Press and hold the left mouse button on an item to grab it and suspend it in the air.</li>
        <li><strong>Function:</strong> Can be used to move light items (e.g., barrels, boxes), or to throw items into a fire to burn (if you don't want to waste torches).</li>
    </ul>

    <h3>F key (Swap Hands):</h3>
    <ul>
        <li><strong>Function:</strong> Swaps the items held in your left and right hands.</li>
        <li><strong>Advanced Use:</strong> If you want to organize your inventory or use your wand in your left hand (because you can only cast spells with your right hand), you need to press F to switch hands.</li>
    </ul>

    <h2>5. Accessibility Settings (Spell Optimization)</h2>
    <div class="highlight-box">
        <p><strong>This is the most important part of this guide!</strong> If you find chanting spells awkward or your pronunciation causes spells to fail, be sure to enable this feature.</p>
    </div>

    <h3>Voice Spell Selection:</h3>
    <ul>
        <li><strong>Default:</strong> Hold down the right mouse button, move the mouse up and down to select a spell, and then you must speak the incantation into the microphone to cast it.</li>
        <li><strong>Enabled:</strong>
            <ol>
                <li>Hold down the right mouse button to bring up the spell menu.</li>
                <li>Simply <strong>left-click</strong> the spell icon you want to use.</li>
                <li><strong>Effect:</strong> Your character will automatically recite the incantation and cast the spell, without you needing to speak!</li>
            </ol>
        </li>
    </ul>
    <p><strong>Highly Recommended:</strong> For players who don't want to talk, play games late at night, or have inaccurate pronunciation, this is an essential "physical cheat."</p>

    <h2>Summary:</h2>
    <ul>
        <li><strong>Viewpoint:</strong> Lower sensitivity and smoothness (&lt;15), increase FOV (~100).</li>
        <li><strong>Ambient Sound:</strong> Lower if you find it noisy.</li>
        <li><strong>Accessibility:</strong> Enable <strong>"Voice Spell Selection,"</strong> click with the mouse to cast spells, and say goodbye to social jarring and recognition failures!</li>
    </ul>

    <p>Wishing you smooth spellcasting and a happy survival in the world of Yapyap!</p>
</div>`,
  },

  {
    id: 4,
    title: "Yapyap Full Version Starter Guide: Infinite Flight, Farming & Combat Tips",
    description: "Master the Yapyap full version with this starter guide. Learn the Three-Wand System for infinite flight, lobby gold farming locations, no-damage landing tricks, and combat strategies.",
    tags: ["yapyap"],
    publishDate: "2026-02-06",
    imageUrl: "/images/blog/blog04.webp",
    imageAlt: "Yapyap Full Version Starter Guide",
    seo: {
      title: "Yapyap Full Version Starter Guide: Infinite Flight, Farming & Combat Tips",
      description: "Master the Yapyap full version with this starter guide. Learn the Three-Wand System for infinite flight, lobby gold farming locations, no-damage landing tricks, and combat strategies.",
      keywords: "Yapyap guide, Yapyap starter guide, Yapyap infinite flight, Yapyap farming, Yapyap tips, Yapyap combat, Yapyap wands, Yapyap secrets",
    },
    isHome: true,
    addressBar: "yapyap-full-version-starter-guide",
    detailsHtml: `<div class="container">
    <p>Welcome to Yapyap! In this world of magic and chaos, your initial preparations directly determine how long you can survive. Below is a "formulaic" starter guide based on practical experience.</p>
<div style="position: relative; padding-bottom: 56.25%; height: 0px; overflow: hidden; max-width: 100%;">
  <iframe src="https://www.youtube.com/embed/AMYhCUAGTXs" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
  </iframe>
</div>


    <h2>1. Basic Settings and Perspective</h2>
    <p><strong>Perspective Switching:</strong> After entering the map, if you prefer the perspective of an action game, click the middle mouse button to switch to third-person view. This provides a wider field of view and makes it easier to observe your surroundings.</p>

    <h2>2. Core Mechanics: Why Do You Need a "Three-Wand System"?</h2>
    <p>This is one of the most important mechanics in the game. Many beginners only carry one wand, but experienced players always have their inventory full of the same wands.</p>
    
    <ul>
        <li><strong>Acquiring Wands:</strong> There is a tree with a sign (Free Wands) to the right of the spawn point.</li>
        <li><strong>Controls:</strong> Press E to break the branch, drop it on the ground, and press E again to pick it up and put it in your inventory.</li>
        <li><strong>The Secret to Multiple Wands:</strong> Wand cooldowns (CDs) are not shared in the game.</li>
        <li><strong>Practical Tips:</strong> If you have three Wind Wands, you can press 1 to cast a spell, press F (or the weapon switch key) to switch to the second wand, and then switch to the third wand to cast again. This allows for seamless "machine gun" casting or continuous tornado casting.</li>
    </ul>

    <h2>3. Advanced Movement Techniques: Flying into Space and Landing Without Damage</h2>
    <p>After mastering multi-wielding wands, you can utilize the game's physics engine's features (bugs) to achieve amazing maneuvers.</p>

    <h3>Infinite Flight (Sky Leap):</h3>
    <p>Utilize the Wind Wand's Storm Tornado or Up-Dog.</p>
    <ul>
        <li>Cast Takeoff once -&gt; Switch to the second wand -&gt; Cast Takeoff again.</li>
        <li>If you switch quickly enough, you can fly directly into the atmosphere or to anywhere outside the map you want (essentially a map bug).</li>
    </ul>

    <h3>No-Damage Landing Technique (Essential):</h3>
    <p>Falling from a height usually results in damage or a long period of vulnerability.</p>
    <ul>
        <li><strong>Operation:</strong> At the very moment before landing, repeatedly press the jump key (spacebar). The character will perform a slight jump to negate all fall damage.</li>
    </ul>

    <h2>4. Lobby "Farming": Your First Pot of Gold at the Start</h2>
    <p>Don't rush into the portal! You can earn enough to buy your first potion in the starting Lobby.</p>

    <h3>Get Rich by Scavenging:</h3>
    <ul>
        <li><strong>Plants:</strong> There are glowing plants in the grove behind the spawn point. Press E to pick them up.</li>
        <li><strong>Frogs:</strong> There are glowing dots in the grove. Approaching them might reveal frogs that will spit out coins.</li>
        <li><strong>Sell for Money:</strong> Take the plants and extra branches you collect to the "Big Sister Merchant." Hold the items in your hand and press E to sell them (usually 2 coins each).</li>
    </ul>

    <h3>Hidden Coins:</h3>
    <ul>
        <li><strong>Cabin:</strong> There is a small cabin behind the spawn point.</li>
        <li><strong>Location:</strong> On the stairs to the left after entering the cabin. Usually, 11 coins are hidden there. Pick them up immediately at the start!</li>
    </ul>

    <h2>5. Quest and Contract System</h2>
    <ul>
        <li><strong>View Contracts:</strong> The notice board next to the spawn point is your quest board.</li>
        <li>Can't see it? (Tip: Try pressing G to view it in first-person).</li>
    </ul>

    <h2>6. Combat and Survival Tips (for Guards and Bosses)</h2>
    <p><strong>Kiting:</strong> Use terrain (like railings or pillars) to block monsters' line of sight.</p>

    <h3>Using Movement Techniques:</h3>
    <ul>
        <li><strong>Cornering:</strong> Outdoors, use the "Up-Dog" spell to fly close to walls, weaving along very narrow edges to avoid one-hit kills like those from Harlequin Girl.</li>
        <li><strong>Using Hit Jutsu:</strong> When a guard raises their sword, don't panic. Use Up-Dog to jump in place, dodging the attack and taunting the monster by landing on its head.</li>
        <li><strong>Blowing Off Helmets:</strong> Use the Wind Wand to blow off a guard's helmet for a bonus.</li>
    </ul>

    <h2>7. Lobby Easter Eggs and Functions</h2>
    <ul>
        <li><strong>Invite Friends:</strong> The magic orb in the middle of the cabin allows you to invite Steam friends to play together. Sit on it (press E).</li>
        <li><strong>Spellbook:</strong> There's a spellbook on the second floor of the cabin. Opening it will show you the skill descriptions of your current wand.</li>
        <li><strong>Musical Instruments:</strong> There are three musical instruments outside the second-floor balcony.</li>
        <li><strong>How to Play:</strong> Pick up an instrument, right-click to raise it, left-click for a single note, and hold down the mouse button while scrolling to play consecutive notes.</li>
        <li><strong>Easter Egg:</strong> If you've played <em>Outer Wilds</em>, you'll find the sounds of these instruments very familiar and comforting.</li>
    </ul>

    <h2>8. Starting the Game</h2>
    <p>After looting the lobby and buying your first <strong>Flight Potion</strong>, go to the stone teleportation array in the center of the lobby. Press E to activate it, and everyone must stand inside to enter the main level.</p>

    <p><strong>Summary:</strong> <em>Yapyap</em> is more than just a horror game; it's also a game of movement. Remember the key: Carry multiple wands, press spacebar when landing, and take off when in doubt! Have fun in the castle!</p>
</div>`,
  },

  {
    id: 1,
    title: "Getting Started in Yapyap: Essential Controls & Settings Guide",
    iframeUrl: "1",
    description: "New to Yapyap? This guide helps fledgling wizards master essential controls & settings! Learn to cast spells (even with a buggy mic!), interact with the environment, manage your inventory, and more. Become a Yapyap pro in no time!",
    tags: ["yapyap", "getting started", "controls", "spell casting", "wizard game"],
    publishDate: "2026-01-22",
    imageUrl: "/images/blog/blog01.webp",
    imageAlt: "A wizard casts a spell in Yapyap, showcasing the game's magic system.",
    seo: {
      title: "Yapyap: Getting Started Guide - Master Controls & Spell Casting",
      description: "New to Yapyap? Learn essential controls, settings (including microphone fix!), inventory management & elemental interactions in this beginner's guide.",
      keywords: "yapyap, getting started, yapyap controls, spell casting, voice casting, inventory, elemental interactions, wizard game, magic",
    },
    isHome: false,
    addressBar: "getting-started-yapyap-essential-controls-settings-guide",
    detailsHtml: `
  <div class="yapyap-guide-container">
      <!-- 视频嵌入区域 -->
      <div class="video-container">
          <!-- 请将下面的 src 替换为您上传到 YouTube 后的视频嵌入链接 -->
          <iframe src="https://www.youtube.com/embed/AwtB8ZWk264" title="Yapyap Beginner's Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <p>Welcome to <strong>Yapyap</strong>! The world is magical, but the controls can be a bit tricky for new wizards. Before you rush out to fight Goblins, you need to configure your settings correctly. This guide covers the basics of movement, inventory, and the most important setting: <strong>Spell Casting</strong>.</p>
  
      <h2>1. Essential Settings: Fix Your Mic &amp; Spells</h2>
      <p>By default, Yapyap expects you to shout spells into your microphone. But if your mic isn't working, or you prefer a quieter playstyle, you must change this setting immediately.</p>
      <ul>
          <li>Go to <strong>Settings</strong> &gt; <strong>Accessibility</strong>.</li>
          <li>Locate <strong>"Voice Spell Select"</strong>.</li>
          <li><strong>Recommended Action:</strong> Enable the second option – <strong>"Hold Right Mouse Button for Spell"</strong>.</li>
      </ul>
      <p>This allows you to cast magic by holding <kbd>Right Click</kbd> instead of speaking, which is much more reliable for beginners.</p>
  
      <h2>2. Basic Controls &amp; Movement</h2>
      <p>Mastering movement is key to surviving the night. Note that the physics in Yapyap can feel a bit "floaty," so patience is key.</p>
      <ul>
          <li><strong>Move:</strong> <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd></li>
          <li><strong>Grab / Interact:</strong> Hold <kbd>Left Click</kbd>. (Wait a split second for the item to register before dragging).</li>
          <li><strong>Pick Up Item:</strong> Press <kbd>E</kbd>. (Press again to drop it gently).</li>
      </ul>
  
      <div class="pro-tip-box">
          <span class="pro-tip-title">🔥 Advanced Mechanic: The Charged Throw</span>
          To throw an item, press <kbd>Q</kbd>. However, if you <strong>Hold <kbd>Q</kbd></strong>, you can charge your throw! This increases distance and power, which is crucial for solving puzzles or tossing items to teammates.
      </div>
  
      <h2>3. Elemental Interactions (Fire Staffs)</h2>
      <p>The game features environmental interactions that aren't explained in the tutorial. If you find a <strong>Fire Staff</strong> or a wooden stick that isn't lit:</p>
      <ol>
          <li>Find a campfire or a wall torch.</li>
          <li><strong>Throw (<kbd>Q</kbd>)</strong> the staff through the flame.</li>
          <li>The item will catch fire and reignite!</li>
      </ol>
      <p><em>Warning: Be careful not to throw explosive items into the fire!</em></p>
  
      <h2>4. Inventory &amp; Hands Management</h2>
      <p>Your inventory is split between your <strong>Backpack</strong> and your <strong>Hands</strong>. Understanding this is vital for combat.</p>
      <ul>
          <li><strong>Backpack Slots:</strong> Keys <kbd>1</kbd>, <kbd>2</kbd>, and <kbd>3</kbd>.</li>
          <li><strong>Main Hand (Right):</strong> This is the active hand for using wands.</li>
          <li><strong>Off-Hand (Left):</strong> Used for carrying extra items.</li>
          <li><strong>Swap Hands:</strong> Press <kbd>F</kbd>.</li>
      </ul>
      <p><strong>Why is <kbd>F</kbd> important?</strong> You can only cast spells with the wand in your <em>Main Hand</em>. If your wand is in your left hand, press F to swap it!</p>
  
      <h2>5. Camera, Emotes &amp; Ragdoll</h2>
      <h3>Camera Controls</h3>
      <ul>
          <li><strong>Toggle View:</strong> Press <kbd>Middle Mouse Button</kbd> to switch between 1st Person and 3rd Person view.</li>
          <li><strong>Selfie Mode:</strong> Hold <kbd>Middle Mouse Button</kbd> to look back at your character (useful for checking if monsters are behind you).</li>
      </ul>
  
      <h3>Social &amp; Fun</h3>
      <ul>
          <li><strong>Emotes:</strong> Hold <kbd>T</kbd> to open the emote wheel (Dance, Point, etc.).</li>
          <li><strong>Play Dead (Ragdoll):</strong> Press <kbd>V</kbd>.</li>
      </ul>
      <p>Pressing <kbd>V</kbd> makes you instantly collapse. While it's fun, be warned: <strong>playing dead will NOT fool a monster</strong> if it has already seen you!</p>
  
      <hr>
      <p><em>Ready for the next step? Check out our <a href="/guides/scales-ball-puzzle-solution/">Ultimate Puzzle Guide</a> to solve the first level!</em></p>
  
  </div>`,
  },

  {
    id: 2,
    title: "Yapyap Secrets Guide: How to Farm 30+ Coins & Fly Infinitely Before the Castle",
    iframeUrl: "1",
    description: "Don't rush into the castle! This Yapyap secrets guide unveils hidden treasures in the starting lobby: 20-30 coins, free wands, and even 50-gold gems. Master the Double Wand Flight trick for infinite soaring! Dominate Yapyap before you even begin.",
    tags: ["yapyap secrets", "yapyap guide", "coin farming", "infinite flight", "double wand trick"],
    publishDate: "2026-01-22",
    imageUrl: "/images/blog/blog02.webp",
    imageAlt: "Yapyap gameplay screenshot showing a character in the starting forest area, highlighting the coin farming potential.",
    seo: {
      title: "Yapyap Secrets Guide: Farm Coins & Infinite Flight Before the Castle!",
      description: "Unlock Yapyap's hidden potential! This guide reveals how to farm 30+ coins, get free wands, and achieve infinite flight before entering the castle. Dominate the game!",
      keywords: "yapyap, secrets, guide, coin farming, infinite flight, double wand trick, hidden coins, merchant, gems",
    },
    isHome: true,
    addressBar: "yapyap-secrets-guide-how-to-farm-coins-fly-infinitely",
    detailsHtml: `
  <div class="yapyap-guide-container">
  
      <!-- 视频嵌入 -->
      <div class="video-container">
          <!-- Replace YOUR_VIDEO_ID_HERE with the actual ID from YouTube -->
          <iframe src="https://www.youtube.com/embed/MYaHSR8pQUY" title="Yapyap Secrets Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
  
      <h1 style="font-size: 2em; font-weight: bold;">Yapyap Secrets: How to Farm Coins &amp; Fly Before Entering the Castle</h1>
      
      <p>Most players rush into the castle immediately, but that's a rookie mistake! The starting lobby area in <strong>Yapyap</strong> actually hides <strong>20 to 30 coins</strong>, free wands, and even rare <strong>Gems</strong> worth 50 gold. By spending just 2 minutes farming here, you can buy powerful gear before the game even starts.</p>
  
      <h2>1. Hidden Coins Locations in the Lobby</h2>
      <p>Don't ignore the starting forest. Here is where you can find quick cash:</p>
      <ul>
          <li><strong>Free Wands Tree:</strong> Check the tree marked "Free Wands." You can break branches off it to get basic wands for free. Even if you don't use them, you can sell them!</li>
          <li><strong>Behind the Signboard:</strong> Go behind the "Respawn Point" signboard. There are usually <strong>10 coins</strong> hidden in the grass.</li>
          <li><strong>The Campfire Chest:</strong> Look behind the Merchant near the campfire. On top of the wooden crate, you will find a stack of <strong>11 coins</strong>.</li>
      </ul>
  
      <div class="secret-box">
          <span class="secret-title">💰 The 50-Gold Gem Secret</span>
          <p>This is the biggest secret in the demo. Don't just loot the chest—<strong>destroy it!</strong></p>
          <p>Pick up the wooden crates or buckets and throw them into the fire or smash them against a rock. Inside, you have a chance to find a <strong>Red Gem</strong>. Throwing this gem grants you an instant <strong>50 Coins</strong>!</p>
      </div>
  
      <h2>2. Making Money: Selling to the Merchant</h2>
      <p>The mysterious merchant buys almost anything. This is a great way to clean up your inventory:</p>
      <ul>
          <li><strong>Mushrooms:</strong> Sell for 1 Coin.</li>
          <li><strong>Spare Wooden Wands:</strong> Sell for 2 Coins.</li>
      </ul>
      <p>To sell, simply hold the item in your hand, look at the merchant, and you will see a <strong>"Sell"</strong> prompt.</p>
  
      <h2>3. The "Double Wand" Infinite Flight Trick</h2>
      <p>Want to reach high places or skip difficult parkour sections? You can chain flight spells if you have <strong>two wands</strong> because their cooldowns are separate.</p>
      
      <div class="flight-box">
          <h3>🚀 How to Fly Higher (Combo Guide)</h3>
          <p><strong>Requirement:</strong> Two basic wands (one in Main Hand, one in Off-Hand).</p>
          <ol>
              <li>Cast <strong>Tornado</strong> (Bottom-Left Spell) to launch yourself into the air.</li>
              <li>Cast <strong>Up-Dog</strong> (Bottom-Right Spell) to float higher.</li>
              <li>Mid-air, press <kbd>F</kbd> to swap hands.</li>
              <li>Immediately cast <strong>Up-Dog</strong> again with your second wand!</li>
          </ol>
          <p>This combo allows you to fly three stages high, letting you reach the castle roof or secret areas easily.</p>
      </div>
  
      <h2>Summary</h2>
      <p>By using these strategies, you can enter the first night with a full inventory and enough gold to buy a specialized wand. Don't forget to check the <strong>Free Wands</strong> tree every time you respawn!</p></div>`,
  },

  {
    id: 3,
    title: 'apyap Night 1 Survival Guide: The "Infinite Flight" Strategy & Best Loot Routes',
    iframeUrl: "1",
    description: "The first night in Yapyap sets the pace for your entire run. Many new wizards die because they can't find the exit or get cornered by the Clown Girl. This guide details the \"Standardized Opening\" strategy that pro players use to secure 800+ points and safe extraction in under 5 minutes.",
    tags: ["first", "night", "yapyap", "sets", "pace"],
    publishDate: "2026-01-22",
    imageUrl: "/images/blog/blog03.webp",
    imageAlt: "Yapyap Day 1 Survival Guide",
    isHome: true,
    seo: {
      title: "Yapyap Night 1 Guide: Infinite Flight, Loot Spots & Escape Strategy",
      description: "Meta Description: Survive Day 1 in Yapyap with our pro guide. Learn the Double-Wand flight trick, where to find hidden washroom loot, and how to identify the Blue Escape Tower.",
      keywords: "yapyap night 1, infinite flight, flight potion, yapyap escape tower, washbasin loot",
    },
    addressBar: "yapyap-Night-1-Survival-Guide",
    detailsHtml: `
<p>
  The first night in <strong>Yapyap</strong> sets the pace for your entire run. Many players get lost in the castle maze or cornered by enemies. This guide reveals the "Standardized Opening" used by pros to secure 800+ points and a safe extraction in under 5 minutes.
</p>

<h2>
  <strong>1. The "Standardized" Preparation</strong>
</h2>

<p>
  Success starts before you even teleport into the castle. Follow this checklist in the Lobby:
</p>

<ol>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Grab Two Wands:</strong> Do not just take one. Break off <strong>two identical branches</strong> from the "Free Wands" tree. This is essential for the flight trick.
  </li>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Farm the Lobby:</strong> Collect the 21 coins hidden behind the signboard and on the campfire chest.
  </li>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Buy the Flight Potion:</strong> Use your coins to buy the <strong>Large Blue Potion</strong> from the merchant. This is your safety net for finding the exit.
  </li>
</ol>

<p>
  🚀 The Double-Wand Infinite Flight Trick  
  The standard "Up-Dog" spell has a cooldown, but swapping wands bypasses it. Here is the combo to reach the castle ceiling:
</p>

<ol>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    <strong>Cast Tornado</strong> (Bottom-Left Spell) to launch yourself into the air.
  </li>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    <strong>Cast Up-Dog</strong> (Bottom-Right Spell) to float higher.
  </li>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    While in mid-air, press F to swap to your second wand.
  </li>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    <strong>Cast Up-Dog again</strong> immediately!
  </li>
</ol>

<p>
  This allows you to fly three stages high, letting you skip staircases and stay safe from ground enemies.
</p>

<h2>
  <strong>2. Best Loot Routes &amp; Point Farming</strong>
</h2>

<p>
  Don't waste time breaking every single wooden crate. Focus on these high-efficiency point sources:
</p>

<h3>
  <strong>The Washbasin Room</strong>
</h3>

<p>
  This room is a goldmine. Look for the row of sinks. Use your <strong>Tornado</strong> spell to jump on top of the central pillar or sink area—there are often <strong>11 bonus coins</strong> spawning there.
</p>

<h3>
  <strong>Burn Paintings for Free</strong>
</h3>

<p>
  Save your torch! If you see a painting or tapestry:
</p>

<ol>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    Grab it off the wall (Left Click).
  </li>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    Touch it to a nearby <strong>wall lamp</strong> or candle.
  </li>
  <li data-list="ordered">
    <span contenteditable="false"></span>
    It will burn instantly, granting you points without using your resources.
  </li>
</ol>

<h2>
  <strong>3. Survival &amp; The "Clown Girl"</strong>
</h2>

<p>
  <strong>⚠️ DANGER: The Clown Girl</strong>
</p>

<p>
  If you hear heavy, stomping footsteps, fly up immediately. The Clown Girl is a fast, heavy enemy that can <strong>insta-kill</strong> you. Do not attempt to fight her with a wooden wand.
</p>

<p>
  Always keep an eye on the top-left corner of your screen. If the status changes from <em>"Chilling"</em> to <strong>"Suspicious,"</strong> it means an enemy has spawned nearby.
</p>

<h2>
  <strong>4. How to Escape (Extraction)</strong>
</h2>

<p>
  Once you have hit your point quota (usually by burning books or completing the side quest shown on the right), you need to leave.
</p>

<ol>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Look Up:</strong> Once you are outdoors or in the main hall, look for a tower with a <strong>Blue Sparkling Roof</strong>.
  </li>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Use Your Potion:</strong> If you are lost, drink your <strong>Flight Potion</strong> and fly straight up to spot the blue sparkles.
  </li>
  <li data-list="bullet">
    <span contenteditable="false"></span>
    <strong>Teleport:</strong> Stand in the purple circle at the tower base to end the night.
  </li>
</ol>

<p>
  <em>
    Mastered Night 1? Check out our 
    <a href="/wiki/monsters/" rel="noopener noreferrer" target="_blank">Monster Guide</a> 
    to prepare for the horrors of Night 2!
  </em>
</p>

    `,
  },




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
