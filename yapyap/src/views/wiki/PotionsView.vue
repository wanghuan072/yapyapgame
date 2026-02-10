<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ t('Wiki.Home.breadcrumbs.home') }}</router-link>
          <span class="separator">></span>
          <router-link to="/wiki">{{ t('Wiki.Home.breadcrumbs.wiki') }}</router-link>
          <span class="separator">></span>
          <span>{{ t('Wiki.Home.grid.potions.title') }}</span>
        </nav>
        <p class="pill">{{ t('Wiki.Potions.pill') }}</p>
        <h1 class="title">{{ t('Wiki.Potions.title') }}</h1>
        <p class="intro" v-html="t('Wiki.Potions.intro')"></p>
      </div>
    </section>
    <main class="container">

      <!-- SEO Highlight -->
      <section class="seo-highlight-section">
        <div class="seo-highlight card">
          <div class="seo-icon">💡</div>
          <div class="seo-content">
            <h3 class="seo-title">{{ t('Wiki.Potions.seo.title') }}</h3>
            <p class="seo-text" v-html="t('Wiki.Potions.seo.text')"></p>
          </div>
        </div>
      </section>

      <!-- How to Craft Section -->
      <section class="crafting-mechanic-section">
        <div class="mechanic-card card">
          <h2 class="section-title">{{ t('Wiki.Potions.crafting.title') }}</h2>
          <div class="mechanic-content">
            <p v-html="t('Wiki.Potions.crafting.intro')"></p>
            <div class="steps-list">
              <div class="step-item" v-for="step in 3" :key="step">
                <div class="step-number">{{ step }}</div>
                <div class="step-content">
                  <h3 class="step-title">{{ t(`Wiki.Potions.crafting.steps.${step}.title`) }}</h3>
                  <p v-html="t(`Wiki.Potions.crafting.steps.${step}.text`)"></p>
                  <p v-if="step === 3" class="step-note" v-html="t(`Wiki.Potions.crafting.steps.${step}.note`)"></p>
                </div>
              </div>
            </div>
            <div class="mechanic-formula" v-html="t('Wiki.Potions.crafting.formula')"></div>
          </div>
        </div>
      </section>

      <!-- Potion list: card grid (no images) -->
      <section class="potions-section">
        <div class="potions-card card">
          <div class="section-head">
            <h2 class="section-title">{{ t('Wiki.Potions.database.title') }}</h2>
            <p class="section-subtitle" v-html="t('Wiki.Potions.database.subtitle')"></p>
          </div>
          <div class="potions-grid">
            <article v-for="recipe in recipes" :key="recipe.item" class="potion-card">
              <h3 class="potion-card-title">{{ recipe.item }}</h3>
              <dl class="potion-card-meta">
                <dt>{{ t('Wiki.Potions.database.headers.recipe') }}</dt>
                <dd class="potion-recipe">{{ recipe.recipe[0] }}</dd>
                <dt>{{ t('Wiki.Potions.database.headers.effect') }}</dt>
                <dd>{{ recipe.effect }}</dd>
                <dt>{{ t('Wiki.Potions.database.headers.duration') }}</dt>
                <dd>{{ recipe.duration }}</dd>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <!-- Recipe book: in-game reference (5 spreads) -->
      <section class="recipe-book-section">
        <div class="wiki-content card">
          <div class="section-head">
            <h2 class="section-title">{{ t('Wiki.Potions.recipeBook.title') }}</h2>
            <p class="section-subtitle" v-html="t('Wiki.Potions.recipeBook.subtitle')"></p>
          </div>
          <div class="recipe-book-grid">
            <div class="recipe-book-item" v-for="(img, idx) in recipeBookImages" :key="idx">
              <div class="recipe-book-image-wrap">
                <img :src="img" :alt="'Recipe book spread ' + (idx + 1)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ingredients: with images -->
      <section class="ingredients-section">
        <div class="ingredients-card card">
          <h2 class="section-title">{{ t('Wiki.Potions.ingredients.title') }}</h2>
          <div class="ingredients-content">
            <p v-html="t('Wiki.Potions.ingredients.intro')"></p>
            <div class="ingredients-grid">
              <div class="ingredient-item card" v-for="ingredient in ingredients" :key="ingredient.name">
                <div class="ingredient-image-wrap">
                  <img :src="ingredient.image" :alt="ingredient.name" />
                </div>
                <div class="ingredient-name">{{ ingredient.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Potion Room Secrets -->
      <section class="secrets-section">
        <div class="secrets-card card">
          <h2 class="section-title">{{ t('Wiki.Potions.secrets.title') }}</h2>
          <div class="secrets-content">
            <p v-html="t('Wiki.Potions.secrets.intro')"></p>
            <div class="ladder-strategy">
              <div class="ladder-icon">🪜</div>
              <div class="ladder-content">
                <h3 class="ladder-title">{{ t('Wiki.Potions.secrets.ladder.title') }}</h3>
                <p v-html="t('Wiki.Potions.secrets.ladder.text')"></p>
                <ul class="ladder-list">
                  <li v-for="(item, index) in tm('Wiki.Potions.secrets.ladder.list')" :key="index" v-html="item"></li>
                </ul>
                <div class="ladder-tip" v-html="t('Wiki.Potions.secrets.ladder.tip')"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-card card">
          <h2 class="section-title">{{ t('Wiki.Potions.faq.title') }}</h2>
          <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in tm('Wiki.Potions.faq.list')" :key="index">
              <h3 class="faq-question">{{ item.question }}</h3>
              <p class="faq-answer" v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const recipesData = [
  { id: 'healing' },
  { id: 'healthBoost' },
  { id: 'staminaBoost' },
  { id: 'cooldownReduction' },
  { id: 'flight' },
  { id: 'invisibility' },
  { id: 'explosive' },
  { id: 'zippy' },
  { id: 'froggy' },
  { id: 'revive' },
]

const recipes = computed(() => recipesData.map(recipe => {
  const data = tm(`Wiki.Potions.recipes.${recipe.id}`)
  return { ...recipe, ...data }
}))

const potionsBase = '/images/potions/'

const recipeBookImages = [
  potionsBase + 'ScreenShot_2026-02-09_192951_632.png',
  potionsBase + 'ScreenShot_2026-02-09_193001_191.png',
  potionsBase + 'ScreenShot_2026-02-09_193009_599.png',
  potionsBase + 'ScreenShot_2026-02-09_193019_511.png',
  potionsBase + 'ScreenShot_2026-02-09_193027_952.png',
]

const ingredientsData = [
  { id: 'fresh_water_pearl', image: potionsBase + 'ScreenShot_2026-02-09_192603_392.png' },
  { id: 'dragon_bone', image: potionsBase + 'ScreenShot_2026-02-09_192617_048.png' },
  { id: 'blood_rose', image: potionsBase + 'ScreenShot_2026-02-09_192650_088.png' },
  { id: 'goblin_tooth', image: potionsBase + 'ScreenShot_2026-02-09_192700_855.png' },
  { id: 'phoenix_feather', image: potionsBase + 'ScreenShot_2026-02-09_192710_847.png' },
  { id: 'glowing_mushroom', image: potionsBase + 'ScreenShot_2026-02-09_192722_255.png' },
  { id: 'coal', image: potionsBase + 'ScreenShot_2026-02-09_192729_007.png' },
  { id: 'golem_gonads', image: potionsBase + 'ScreenShot_2026-02-09_192739_935.png' },
  { id: 'powdered_crystal', image: potionsBase + 'ScreenShot_2026-02-09_192810_543.png' },
  { id: 'weeping_willow_amber', image: potionsBase + 'ScreenShot_2026-02-09_192836_367.png' },
  { id: 'mystery_egg', image: potionsBase + 'ScreenShot_2026-02-09_192844_822.png' },
]

const ingredients = computed(() => ingredientsData.map(ing => {
  const name = t(`Wiki.Potions.ingredients.items.${ing.id}.name`)
  return { ...ing, name: name || ing.id.replace(/_/g, ' ') }
}))
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
.ingredients-content p,
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
.ingredients-content strong,
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
.potions-card,
.ingredients-card,
.faq-card,
.secrets-card {
  margin-top: 32px;
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

/* Potions: card grid (no images) */
.potions-section {
  margin-top: 32px;
}

.potions-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.potions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.potion-card {
  padding: 20px;
  background: rgba(15, 20, 36, 0.5);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.potion-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.06);
}

.potion-card-title {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 14px 0;
  color: var(--text);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.potion-card-meta {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.potion-card-meta dt {
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 600;
  color: var(--text);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.potion-card-meta dt:first-of-type {
  margin-top: 0;
}

.potion-card-meta dd {
  margin: 0;
  color: var(--muted);
}

.potion-recipe {
  font-style: italic;
}

/* Recipe book: 5 spread images */
.recipe-book-section {
  margin-top: 32px;
}

.recipe-book-section .wiki-content {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.recipe-book-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.recipe-book-item {
  border-radius: 12px;
  overflow: hidden;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid var(--border);
}

.recipe-book-image-wrap {
  aspect-ratio: 4/3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipe-book-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Ingredients: grid with images */
.ingredients-section {
  margin-top: 32px;
}

.ingredients-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.ingredients-content p {
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
}

.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.ingredient-item {
  padding: 12px;
  text-align: center;
  background: rgba(15, 20, 36, 0.5);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.ingredient-item:hover {
  border-color: rgba(139, 92, 246, 0.4);
}

.ingredient-image-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(15, 20, 36, 0.8);
  margin-bottom: 10px;
}

.ingredient-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ingredient-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
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

.muted {
  color: var(--muted);
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


/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .seo-highlight-section,
  .crafting-mechanic-section,
  .potions-section,
  .recipe-book-section,
  .ingredients-section,
  .secrets-section,
  .faq-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .wiki-content,
  .mechanic-card,
  .potions-card,
  .ingredients-card,
  .faq-card,
  .secrets-card {
    padding: 0.8rem;
    margin-top: 0.8rem;
  }

  .seo-highlight {
    padding: 0.8rem;
    flex-direction: column;
    gap: 0.7rem;
  }

  .potion-card {
    padding: 1rem;
  }

  .potions-grid {
    grid-template-columns: 1fr;
  }

  .faq-item {
    padding: 0.8rem;
  }

  /* h1 - 使用class选择器 */
  .title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h2 - 使用class选择器 */
  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h3 - 使用class选择器 */
  .seo-title,
  .step-title,
  .ladder-title,
  .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* p - 使用class选择器 */
  .intro {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .seo-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .mechanic-content p,
  .ingredients-content p,
  .secrets-content p,
  .faq-answer {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .step-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .mechanic-warning {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 0.8rem;
    margin-bottom: 0.7rem;
  }

  .mechanic-formula {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 0.8rem;
    margin-top: 0.7rem;
  }

  .step-note {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 0.7rem;
    margin-top: 0.5rem;
  }

  .ladder-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .ladder-tip {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-top: 0.7rem;
  }

  /* 布局调整 */
  .section-head {
    margin-bottom: 0.7rem;
  }

  .steps-list {
    gap: 0.8rem;
    margin-bottom: 0.7rem;
  }

  .step-item {
    flex-direction: column;
    gap: 0.7rem;
    padding: 0.8rem;
  }

  .step-number {
    align-self: flex-start;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .seo-icon {
    font-size: 1.5rem;
  }

  .ladder-strategy {
    flex-direction: column;
    gap: 0.7rem;
  }

  .ladder-icon {
    font-size: 2rem;
    align-self: flex-start;
  }

  .recipe-formula-card,
  .recipe-effect,
  .recipe-meta {
    margin-top: 0.7rem;
  }

}
</style>
