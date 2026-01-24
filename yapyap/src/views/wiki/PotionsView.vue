<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">></span>
          <a href="/wiki">Wiki</a>
          <span class="separator">></span>
          <span>Potions & Crafting</span>
        </nav>
        <p class="pill">Crafting Recipes · Ingredients · Effects</p>
        <h1 class="title">YAPYAP Potions & Crafting Recipes Guide</h1>
        <p class="intro">
          Complete guide to all crafting recipes in YAPYAP. Master the three-step brewing process using the Cauldron and learn which ingredients to eat raw vs. brew into potions.
        </p>
      </div>
    </section>
    <main class="container">

      <!-- SEO Highlight -->
      <section class="seo-highlight-section">
        <div class="seo-highlight card">
          <div class="seo-icon">💡</div>
          <div class="seo-content">
            <h3 class="seo-title">Pro Tip: Broken Bottles Work Too!</h3>
            <p class="seo-text">
              <strong>Did you know?</strong> You can brew potions using broken glass bottles found on the floor! Don't waste money buying bottles from the shop. Even <strong>Broken Bottles</strong> can be used to fill potions from the cauldron.
            </p>
          </div>
        </div>
      </section>

      <!-- How to Craft Section -->
      <section class="crafting-mechanic-section">
        <div class="mechanic-card card">
          <h2 class="section-title">How to Brew Potions (The Three-Step Process)</h2>
          <div class="mechanic-content">
            <p>
              Brewing potions in YAPYAP requires a <strong>Cauldron</strong> (the green alchemy pot), an <strong>Ingredient</strong>, and an <strong>Empty Bottle</strong>. The process is simple but requires all three components.
            </p>
            <div class="steps-list">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3 class="step-title">Toss it in</h3>
                  <p>Hold the ingredient (mushroom, carrot, etc.) in your hand, then press <strong>Q</strong> to drop it into the green Cauldron. The cauldron will react with a splash effect.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3 class="step-title">Wait for Splash</h3>
                  <p>Watch for the water to splash. The cauldron's liquid properties will change based on the ingredient you added. The liquid will turn green and become ready for bottling.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3 class="step-title">Fill Bottle</h3>
                  <p>Hold an <strong>Empty Bottle</strong> or <strong>Broken Bottle</strong> in your hand, face the cauldron, and press <strong>E</strong> (Fill) to bottle the potion. The potion color will change based on the ingredient used.</p>
                  <p class="step-note"><strong>Key Point:</strong> Even broken glass bottles found on the floor can be used to create perfect potions!</p>
                </div>
              </div>
            </div>
            <div class="mechanic-formula">
              <strong>Formula:</strong> Cauldron + Ingredient + Empty Bottle = Potion
            </div>
          </div>
        </div>
      </section>

      <!-- Potion Recipes Table -->
      <section class="wiki-content card">
        <div class="section-head">
          <h2 class="section-title">Potion Recipes Database</h2>
          <p class="section-subtitle">
            Complete list of all potions, their colors, recipes, effects, and durations.
          </p>
        </div>

        <!-- Desktop table -->
        <div class="table card" aria-label="All YAPYAP potion recipes">
          <div class="row head">
            <div class="c image">Image</div>
            <div class="c potion">Potion</div>
            <div class="c color">Color</div>
            <div class="c recipe">Recipe</div>
            <div class="c effect">Effect</div>
            <div class="c duration">Duration</div>
          </div>

          <div class="row" v-for="recipe in recipes" :key="recipe.item">
            <div class="c image">
              <div class="image-placeholder">
                <img :src="recipe.image" :alt="recipe.item" />
              </div>
            </div>
            <div class="c potion">
              <div class="potion-name">
                <strong>
                  <span v-if="recipe.isWarning" class="warning-icon">⚠️</span>
                  {{ recipe.item }}
                  <span v-if="recipe.colorDot" class="color-dot" :class="`color-${recipe.colorClass}`">{{ recipe.colorDot }}</span>
                </strong>
                <span v-if="recipe.cn" class="potion-cn">{{ recipe.cn }}</span>
              </div>
            </div>
            <div class="c color">
              <div class="color-bar" :class="`color-bar-${recipe.colorClass}`"></div>
              <span class="color-name">{{ recipe.color }}</span>
            </div>
            <div class="c recipe">
              <div class="recipe-formula">
                <span v-for="(ingredient, idx) in recipe.recipe" :key="idx" class="ingredient-item">
                  {{ ingredient }}
                </span>
              </div>
            </div>
            <div class="c effect">{{ recipe.effect }}</div>
            <div class="c duration">{{ recipe.duration }}</div>
          </div>
        </div>

        <!-- Mobile cards -->
        <div class="cards-mobile">
          <div class="recipe-card card" v-for="recipe in recipes" :key="recipe.item" :class="{ 'warning-card': recipe.isWarning }">
            <div class="recipe-card-header">
              <div class="recipe-image">
                <div class="image-placeholder">
                  <img :src="recipe.image" :alt="recipe.item" />
                </div>
              </div>
              <div>
                <h3 class="recipe-name">
                  <span v-if="recipe.isWarning" class="warning-icon">⚠️</span>
                  {{ recipe.item }}
                  <span v-if="recipe.cn" class="potion-cn">{{ recipe.cn }}</span>
                  <span v-if="recipe.colorDot" class="color-dot" :class="`color-${recipe.colorClass}`">{{ recipe.colorDot }}</span>
                </h3>
                <div class="recipe-color">
                  <div class="color-bar" :class="`color-bar-${recipe.colorClass}`"></div>
                  <span>{{ recipe.color }}</span>
                </div>
              </div>
            </div>
            <div class="recipe-formula-card">
              <div class="formula-label">Recipe:</div>
              <div class="recipe-formula">
                <span v-for="(ingredient, idx) in recipe.recipe" :key="idx">
                  {{ ingredient }}
                  <span v-if="idx < recipe.recipe.length - 1" class="recipe-plus">or</span>
                </span>
              </div>
            </div>
            <div class="recipe-effect">
              <div class="effect-label">Effect:</div>
              <div class="effect-text">{{ recipe.effect }}</div>
            </div>
            <div class="recipe-meta">
              <div class="meta-row">
                <span class="meta-label">Duration:</span>
                <span>{{ recipe.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Raw Ingredients Section -->
      <section class="raw-ingredients-section">
        <div class="raw-card card">
          <h2 class="section-title">Raw Ingredient Effects (Eating without Crafting)</h2>
          <div class="raw-content">
            <p>
              Right-click to eat ingredients directly. This section compares the effects of eating raw vs. brewing, which is crucial for survival decisions in critical moments.
            </p>
            
            <!-- Desktop table -->
            <div class="raw-table">
              <div class="raw-row head">
                <div class="raw-c icon">Icon</div>
                <div class="raw-c name">Ingredient</div>
                <div class="raw-c raw-effect">Raw Effect</div>
                <div class="raw-c brewed-effect">Brewed Effect</div>
                <div class="raw-c verdict">Verdict</div>
              </div>
              <div class="raw-row" v-for="ingredient in rawIngredients" :key="ingredient.name">
                <div class="raw-c icon">
                  <div class="ingredient-icon-large">{{ ingredient.icon }}</div>
                </div>
                <div class="raw-c name">
                  <strong>{{ ingredient.name }}</strong>
                </div>
                <div class="raw-c raw-effect">{{ ingredient.rawEffect }}</div>
                <div class="raw-c brewed-effect">{{ ingredient.brewedEffect }}</div>
                <div class="raw-c verdict">
                  <span class="verdict-text">{{ ingredient.verdict }}</span>
                </div>
              </div>
            </div>

            <!-- Mobile cards -->
            <div class="raw-cards-mobile">
              <div class="raw-card-item card" v-for="ingredient in rawIngredients" :key="ingredient.name">
                <div class="raw-card-header">
                  <div class="ingredient-icon-large">{{ ingredient.icon }}</div>
                  <h3 class="raw-card-name">{{ ingredient.name }}</h3>
                </div>
                <div class="raw-card-content">
                  <div class="raw-card-row">
                    <span class="raw-label">Raw Effect:</span>
                    <span class="raw-value">{{ ingredient.rawEffect }}</span>
                  </div>
                  <div class="raw-card-row">
                    <span class="raw-label">Brewed Effect:</span>
                    <span class="raw-value">{{ ingredient.brewedEffect }}</span>
                  </div>
                  <div class="raw-card-row verdict-row">
                    <span class="raw-label">Verdict:</span>
                    <span class="raw-value verdict-text">{{ ingredient.verdict }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Potion Room Secrets -->
      <section class="secrets-section">
        <div class="secrets-card card">
          <h2 class="section-title">The Potion Room Secrets</h2>
          <div class="secrets-content">
            <p>
              The Potion Room contains a hidden mechanic that advanced players should know about. This is an "expert-level" tip that can save your life.
            </p>
            <div class="ladder-strategy">
              <div class="ladder-icon">🪜</div>
              <div class="ladder-content">
                <h3 class="ladder-title">The Ladder Strategy</h3>
                <p>
                  The Potion Room always contains a <strong>Wooden Ladder</strong>. Climb up and you'll find:
                </p>
                <ul class="ladder-list">
                  <li><strong>100% Guaranteed Spawn:</strong> One <strong>Vitality Potion</strong> ready to use.</li>
                  <li><strong>Bonus Loot:</strong> A <strong>Chest</strong> that may contain wands or coins.</li>
                </ul>
                <div class="ladder-tip">
                  <strong>💡 Pro Tip:</strong> Don't rush to eat raw ingredients when low on health. Head to the Potion Room and climb the ladder to get a free potion!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-card card">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-question">Can I stack potion effects?</h3>
              <p class="faq-answer">
                <strong>No, potion effects do not stack.</strong> Drinking a new potion will either replace the previous effect or refresh the timer. You can only have one active potion effect at a time. Plan your potion usage carefully—don't waste a Flight Potion if you already have Invisibility active.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I use broken bottles to brew potions?</h3>
              <p class="faq-answer">
                <strong>Yes!</strong> Broken glass bottles found on the floor work perfectly for brewing potions. You don't need to buy empty bottles from the shop. Just pick up any broken bottle, face the cauldron, and press <strong>E</strong> to fill it.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What does Strength Potion actually do?</h3>
              <p class="faq-answer">
                <strong>Strength Potion enhances your physics capabilities.</strong> Before drinking, you cannot lift heavy crates. After drinking, you can throw heavy wooden crates high into the air. It's essential for moving heavy objects and reaching high loot. It does <strong>not</strong> increase melee damage against enemies.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Should I eat mushrooms raw or brew them?</h3>
              <p class="faq-answer">
                <strong>Do NOT eat normal mushrooms raw!</strong> They only restore 15 HP when eaten, but brewing them into Strength Potion is far more valuable for moving heavy crates. Save them for the cauldron unless you're in a life-or-death emergency.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What happens if I drink Nasty Potion?</h3>
              <p class="faq-answer">
                <strong>Nasty Potion causes a Dizzy debuff</strong> that makes your screen blurry and spin. It's essentially useless for you, but some players throw it at teammates as a prank. Avoid crafting it unless you're intentionally trolling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const recipes = [
  {
    image: '/images/potions/potions-01.webp',
    item: 'Vitality Potion',
    cn: '(Life Potion)',
    color: '🟢 Green → 🔴 Red',
    colorDot: '🔴',
    colorClass: 'red',
    recipe: ['Carrot', 'Five-leaf Clover', 'Feather'],
    effect: 'Full Heal. No matter how much HP you have left, drinking this will restore you to full health instantly.',
    duration: 'Instant',
    isWarning: false,
  },
  {
    image: '/images/potions/potions-04.webp',
    item: 'Strength Potion',
    cn: '(Power Potion)',
    color: '🟢 Green → 🟣 Purple',
    colorDot: '🟣',
    colorClass: 'purple',
    recipe: ['Mushroom (Normal)'],
    effect: 'Super Physics. Before drinking, you cannot lift heavy crates. After drinking, you can throw heavy wooden crates high into the air. Essential for moving heavy objects.',
    duration: '~20s',
    isWarning: false,
  },
  {
    image: '/images/potions/potions-03.webp',
    item: 'Invisibility Potion',
    cn: '(Stealth Potion)',
    color: '🟢 Green → 🔵 Blue',
    colorDot: '🔵',
    colorClass: 'blue',
    recipe: ['Susroom (Green/Blue Spotted Mushroom)'],
    effect: 'Invisibility. Your body becomes transparent, monsters cannot see you. Perfect for sneaking past Guards.',
    duration: '10s (Very short!)',
    isWarning: false,
  },
  {
    image: '/images/potions/potions-02.webp',
    item: 'Flight Potion',
    cn: '(Flying Potion)',
    color: '🟢 Green → 🟡 Yellow',
    colorDot: '🟡',
    colorClass: 'brown',
    recipe: ['Feather'],
    effect: 'Flight. Grants the ability to fly for a limited duration.',
    duration: '20s',
    isWarning: false,
  },
  {
    image: '/images/potions/potions-05.webp',
    item: 'Nasty Potion',
    cn: '(Trash Potion)',
    color: '🟠 Orange',
    colorDot: '🟠',
    colorClass: 'brown',
    recipe: ['Small Bat', 'Bottle', 'Random Junk'],
    effect: 'Debuff: Dizzy. Reversed controls: forward becomes backward, left becomes right. Blurry spinning vision. Do NOT drink unless trolling teammates!',
    duration: 'Until effect wears off',
    isWarning: true,
  },
]

const rawIngredients = [
  {
    icon: '🥕',
    name: 'Carrot',
    rawEffect: 'Restores 15 HP',
    brewedEffect: 'Full Heal (100%)',
    verdict: 'Eat raw when low on HP. Brew when critically injured.',
  },
  {
    icon: '🍄',
    name: 'Mushroom (Normal)',
    rawEffect: 'Restores 15 HP',
    brewedEffect: 'Strength Enhancement',
    verdict: 'Do NOT eat raw! Strength potion for moving crates is too important.',
  },
  {
    icon: '🍀',
    name: 'Five-leaf Clover',
    rawEffect: 'Restores 10 HP',
    brewedEffect: 'Full Heal (100%)',
    verdict: 'Restores least HP when eaten raw. Best used for brewing.',
  },
  {
    icon: '🍄',
    name: 'Susroom (Green Spotted Mushroom)',
    rawEffect: 'Random Effect. May grant strength or cause Dizzy debuff.',
    brewedEffect: 'Stable Invisibility',
    verdict: 'Gambler\'s choice. For non-emergency situations, brew into Invisibility Potion.',
  },
]
</script>

<style scoped>

/* SEO Highlight Section */
.seo-highlight-section {
  margin-top: 32px;
}

.seo-highlight {
  padding: 24px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 18px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.seo-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.seo-content {
  flex-grow: 1;
}

.seo-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.seo-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

.seo-text strong {
  color: var(--text);
  font-weight: 600;
}

/* Crafting Mechanic Section */
.crafting-mechanic-section {
  margin-top: 32px;
}

/* Common Content Styles */
.mechanic-content p,
.raw-content p,
.secrets-content p,
.faq-answer {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 24px 0;
}

.faq-answer {
  margin: 0;
}

/* Common Strong Styles */
.mechanic-content strong,
.raw-content strong,
.secrets-content strong,
.faq-answer strong,
.mechanic-warning strong,
.step-note strong,
.ingredient-effect strong,
.ladder-list strong,
.ladder-tip strong {
  color: var(--text);
  font-weight: 600;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.step-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.2);
  border: 2px solid rgba(139, 92, 246, 0.4);
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
}

.step-content {
  flex-grow: 1;
}

.step-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.step-content p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.mechanic-warning {
  padding: 16px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
}

.mechanic-formula {
  margin-top: 20px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(124, 58, 237, 0.08));
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  color: var(--text);
}

.mechanic-formula strong {
  color: var(--text);
  font-weight: 700;
}

.step-note {
  margin-top: 8px;
  padding: 8px 12px;
  background: rgba(139, 92, 246, 0.1);
  border-left: 3px solid rgba(139, 92, 246, 0.4);
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
}

.potion-cn {
  font-size: 12px;
  color: var(--muted);
  font-weight: 400;
  display: block;
  margin-top: 2px;
}

/* Common Card Styles */
.wiki-content,
.mechanic-card,
.raw-card,
.faq-card,
.secrets-card {
  margin-top: 32px;
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.wiki-content {
  margin-top: 32px;
}

.section-head {
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.section-subtitle {
  color: var(--muted);
  font-size: 14px;
  margin: 0;
}

.table {
  display: none;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
}

.table .row {
  display: grid;
  grid-template-columns: 120px 1.4fr 140px 1fr 2.2fr 90px;
  gap: 16px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  align-items: center;
  transition: background-color 0.2s ease;
}

.table .row:not(.head):hover {
  background: rgba(139, 92, 246, 0.05);
}

.table .row:not(.head) {
  min-height: 90px;
}

.table .row.warning-row:hover {
  background: rgba(239, 68, 68, 0.1);
}

.table .row:last-child {
  border-bottom: none;
}

.table .row.head {
  background: rgba(139, 92, 246, 0.08);
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  align-items: center;
}

.table .c {
  overflow: hidden;
}

.table .c.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Common Image Placeholder Styles */
.image-placeholder {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.table .row:not(.head):hover .image-placeholder {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.recipe-image .image-placeholder {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.table .c.potion {
  display: flex;
  align-items: center;
}

.potion-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}

.potion-name strong {
  color: var(--text);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 6px;
}

.warning-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.color-dot {
  font-size: 14px;
  flex-shrink: 0;
}

.table .c.color {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}

/* Common Color Bar Styles */
.color-bar {
  width: 100%;
  height: 5px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.recipe-color .color-bar {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  box-shadow: none;
}

.color-bar-red {
  background: #ef4444;
}

.color-bar-pink {
  background: #ec4899;
}

.color-bar-blue {
  background: #3b82f6;
}

.color-bar-purple {
  background: #a855f7;
}

.color-bar-brown {
  background: #a16207;
}

.color-bar-yellow {
  background: #eab308;
}

.color-name {
  font-size: 11px;
  color: var(--muted);
  line-height: 1.3;
}

.table .c.recipe {
  min-width: 0;
  font-size: 12px;
  line-height: 1.4;
}

.recipe-formula {
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.3;
}

.ingredient-item {
  font-size: 12px;
  color: var(--text);
  font-weight: 400;
  display: block;
  margin: 0;
  padding: 0;
}

.recipe-plus {
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
  text-transform: lowercase;
  margin: 0 2px;
  display: inline-block;
}

.table .c.effect {
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
  padding-right: 4px;
}

.table .c.duration {
  font-size: 12px;
  color: var(--text);
  font-weight: 600;
  text-align: center;
  padding: 4px 8px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 6px;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.muted {
  color: var(--muted);
}

.cards-mobile {
  display: none;
  flex-direction: column;
  gap: 20px;
}

.recipe-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.recipe-card.warning-card {
  background: rgba(239, 68, 68, 0.05);
  border-color: rgba(239, 68, 68, 0.3);
}

.recipe-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.recipe-image {
  flex-shrink: 0;
}

.recipe-image .image-placeholder {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.recipe-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.recipe-color {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recipe-formula-card {
  margin-bottom: 12px;
  padding: 12px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 10px;
}

.formula-label {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 6px;
  color: var(--text);
}

.recipe-formula {
  font-size: 14px;
}

.recipe-effect {
  margin-bottom: 12px;
}

.effect-label {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 6px;
  color: var(--text);
}

.effect-text {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

.recipe-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-row {
  display: flex;
  gap: 8px;
  font-size: 14px;
}

.meta-label {
  font-weight: 600;
  color: var(--text);
}

/* Raw Ingredients Section */
.raw-ingredients-section {
  margin-top: 32px;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}


.ingredient-item.warning-item {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.3);
}

.ingredient-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.ingredient-info {
  flex-grow: 1;
}

.ingredient-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.ingredient-effect {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

/* Raw Ingredients Table */
.raw-table {
  display: none;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  margin-top: 24px;
}

.raw-row {
  display: grid;
  grid-template-columns: 80px 1.5fr 1.2fr 1.2fr 1.5fr;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.raw-row:last-child {
  border-bottom: none;
}

.raw-row.head {
  background: rgba(139, 92, 246, 0.08);
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.raw-c {
  overflow: hidden;
}

.raw-c.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ingredient-icon-large {
  font-size: 32px;
}

.raw-c.name strong {
  color: var(--text);
  font-size: 15px;
  font-weight: 700;
}

.raw-c.raw-effect,
.raw-c.brewed-effect {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
}

.raw-c.verdict {
  font-size: 14px;
}

.verdict-text {
  padding: 6px 12px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 6px;
  color: var(--text);
  font-weight: 500;
  display: inline-block;
}

.raw-cards-mobile {
  display: none;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.raw-card-item {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.raw-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.raw-card-name {
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.raw-card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.raw-card-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.raw-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.raw-value {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
}

.verdict-row .raw-value {
  padding: 6px 12px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 6px;
  margin-top: 4px;
}

/* Secrets Section */
.secrets-section {
  margin-top: 32px;
}

.ladder-strategy {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(124, 58, 237, 0.08));
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 14px;
}

.ladder-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.ladder-content {
  flex-grow: 1;
}

.ladder-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.ladder-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 12px 0;
}

.ladder-list {
  margin: 12px 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.8;
}

.ladder-list li {
  margin-bottom: 8px;
}

.ladder-tip {
  margin-top: 16px;
  padding: 14px;
  background: rgba(139, 92, 246, 0.15);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
}

/* FAQ Section */
.faq-section {
  margin-top: 32px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.faq-item {
  padding: 20px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.faq-question {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.faq-answer {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

@media (min-width: 1024px) {
  .table {
    display: flex;
  }

  .cards-mobile {
    display: none;
  }

  .raw-table {
    display: flex;
  }

  .raw-cards-mobile {
    display: none;
  }
}

@media (max-width: 1023px) {
  .table {
    display: none;
  }

  .cards-mobile {
    display: flex;
  }

  .raw-table {
    display: none;
  }

  .raw-cards-mobile {
    display: flex;
  }


  .wiki-content,
  .mechanic-card,
  .raw-card,
  .faq-card,
  .secrets-card {
    padding: 20px;
  }

  .seo-highlight {
    padding: 20px;
    flex-direction: column;
    gap: 12px;
  }

  .seo-icon {
    font-size: 28px;
  }

  .steps-list {
    gap: 16px;
  }

  .step-item {
    flex-direction: column;
    gap: 12px;
  }

  .step-number {
    align-self: flex-start;
  }

  .ladder-strategy {
    flex-direction: column;
    gap: 16px;
  }

  .ladder-icon {
    font-size: 40px;
    align-self: flex-start;
  }
}
</style>
