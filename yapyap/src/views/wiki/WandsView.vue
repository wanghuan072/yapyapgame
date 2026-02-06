<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ t('Wiki.Home.breadcrumbs.home') }}</router-link>
          <span class="separator">></span>
          <router-link to="/wiki">{{ t('Wiki.Home.breadcrumbs.wiki') }}</router-link>
          <span class="separator">></span>
          <span>{{ t('Wiki.Home.grid.wands.title') }}</span>
        </nav>
        <p class="pill">{{ t('Wiki.Wands.pill') }}</p>
        <h1 class="title">{{ t('Wiki.Wands.title') }}</h1>
        <p class="intro" v-html="t('Wiki.Wands.intro')"></p>
      </div>
    </section>
    <main class="container">

      <!-- Introduction Section -->
      <section class="introduction-section">
        <div class="intro-card card">
          <h2 class="intro-title">{{ t('Wiki.Wands.introSection.title') }}</h2>
          <div class="intro-content">
            <p v-for="(paragraph, index) in tm('Wiki.Wands.introSection.content')" :key="index" v-html="paragraph"></p>
            <p class="intro-tip" v-html="t('Wiki.Wands.introSection.tip')"></p>
          </div>
        </div>
      </section>

      <section class="wiki-content card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Wiki.Wands.list.title') }}</h2>
          <p class="section-subtitle" v-html="t('Wiki.Wands.list.subtitle')"></p>
        </div>

        <!-- Desktop table -->
        <div class="table card" :aria-label="t('Wiki.Wands.list.title')">
          <div class="row head">
            <div class="image">{{ t('Wiki.Wands.list.headers.image') }}</div>
            <div class="name">{{ t('Wiki.Wands.list.headers.name') }}</div>
            <div class="spells">{{ t('Wiki.Wands.list.headers.spells') }}</div>
            <div class="effects">{{ t('Wiki.Wands.list.headers.effects') }}</div>
          </div>

          <div class="row" v-for="wand in wands" :key="wand.name">
            <div class="c image">
              <div class="image-placeholder">
                <img :src="wand.image" :alt="wand.name" :srcset="wand.image">
              </div>
            </div>
            <div class="name">
              <strong>{{ wand.name }}</strong>
            </div>
            <div class="spells">
              <div class="spell-list">
                <div class="spell-item" v-for="spell in wand.spells" :key="spell.name">
                  <div class="spell-name">{{ spell.name }}</div>
                </div>
              </div>
            </div>
            <div class="effects">
              <div class="effect-list">
                <div class="effect-item" v-for="spell in wand.spells" :key="spell.name">
                  <div class="spell-effect">{{ spell.effect }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile cards -->
        <div class="cards-mobile">
          <div class="wand-card card" v-for="wand in wands" :key="wand.name">
            <div class="wand-card-header">
              <div class="wand-image">
                <div class="image-placeholder">🖼️</div>
              </div>
              <div class="wand-info">
                <h3 class="wand-name">{{ wand.name }}</h3>
              </div>
            </div>
            <div class="wand-spells">
              <h4 class="spells-title">{{ t('Wiki.Wands.list.headers.spells') }}</h4>
              <div class="spell-item" v-for="spell in wand.spells" :key="spell.name">
                <div class="spell-name">{{ spell.name }}</div>
                <div class="spell-effect muted">{{ spell.effect }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Obtain Section -->
      <section class="acquisition-section">
        <div class="acquisition-card card">
          <h2 class="section-title">{{ t('Wiki.Wands.acquisition.title') }}</h2>
          <div class="acquisition-content">
            <p v-html="t('Wiki.Wands.acquisition.content')"></p>
            <ul class="acquisition-list">
              <li v-for="(item, index) in tm('Wiki.Wands.acquisition.list')" :key="index" v-html="item"></li>
            </ul>
            <p class="acquisition-note muted" v-html="t('Wiki.Wands.acquisition.note')"></p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-card card">
          <h2 class="section-title">{{ t('Wiki.Wands.faq.title') }}</h2>
          <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in tm('Wiki.Wands.faq.list')" :key="index">
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
import { useWands } from '@/composables/useWands'

const { t, tm } = useI18n()
const { wands: wandsData } = useWands()

const wands = computed(() => wandsData.value.map(wand => ({
  name: wand.name,
  image: wand.imageUrl,
  spells: (wand.Spells || []).map(spell => ({
    name: spell.name || spell.Spell,
    effect: spell.description || spell.state || '-',
  })),
})))
</script>

<style scoped>

/* Introduction Section */
.introduction-section {
  margin-top: 32px;
}

.intro-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.intro-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.intro-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.intro-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}

.intro-content strong {
  color: var(--text);
  font-weight: 600;
}

.intro-tip {
  padding: 16px;
  background: rgba(139, 92, 246, 0.1);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  margin-top: 8px;
}

.intro-tip strong {
  color: var(--text);
}

.wiki-content {
  margin-top: 32px;
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
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
  grid-template-columns: 140px 1fr 1.5fr 2fr;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.table .row:not(.head) {
  min-height: 80px;
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

.image-placeholder {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 32px;
}

.image-placeholder img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.table .c.name strong {
  color: var(--text);
  font-size: 16px;
  font-weight: 700;
}

.spell-list,
.effect-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spell-item,
.effect-item {
  padding: 8px 12px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.spell-name {
  font-weight: 600;
  color: var(--text);
  font-size: 15px;
}

.spell-effect {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
}

.muted {
  color: var(--muted);
}

.cards-mobile {
  display: none;
  flex-direction: column;
  gap: 20px;
}

.wand-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.wand-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.wand-image {
  flex-shrink: 0;
}

.wand-image .image-placeholder {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 32px;
}

.wand-info {
  flex-grow: 1;
}

.wand-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.wand-spells {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spells-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--text);
}

.spell-item {
  padding: 12px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 10px;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.spell-item .spell-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}

.spell-item .spell-effect {
  font-size: 13px;
  line-height: 1.5;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .table {
    display: none;
  }

  .cards-mobile {
    display: flex;
  }
}

@media (min-width: 1025px) {
  .table {
    display: flex;
  }

  .cards-mobile {
    display: none;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .introduction-section,
  .acquisition-section,
  .faq-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .wiki-content {
    padding: 0.8rem;
  }

  .intro-card,
  .acquisition-card,
  .faq-card {
    padding: 0.8rem;
  }

  .wand-card {
    padding: 0.8rem;
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

  .intro-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h3 - 使用class选择器 */
  .wand-name {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h4 - 使用class选择器 */
  .spells-title {
    font-size: 0.9rem;
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

  .intro-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .acquisition-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .faq-answer {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .intro-tip {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
    padding: 0.8rem;
  }

  .acquisition-note {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
    padding: 0.7rem;
  }

  /* 布局调整 */
  .section-head {
    margin-bottom: 0.7rem;
  }

  .intro-content {
    gap: 0.7rem;
  }

  .acquisition-content {
    margin-top: 0.7rem;
  }

  .acquisition-list {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .acquisition-list li {
    margin-bottom: 0.5rem;
  }

  .faq-list {
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .wand-card-header {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .wand-spells {
    margin-top: 0.7rem;
  }

  .spell-item {
    margin-bottom: 0.5rem;
  }

  .spell-name {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .spell-effect {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

/* Acquisition Section */
.acquisition-section {
  margin-top: 32px;
}

.acquisition-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.acquisition-content {
  margin-top: 16px;
}

.acquisition-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 16px 0;
}

.acquisition-content strong {
  color: var(--text);
  font-weight: 600;
}

.acquisition-list {
  padding-left: 24px;
  margin: 0 0 16px 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.acquisition-list li {
  margin-bottom: 12px;
}

.acquisition-list strong {
  color: var(--text);
  font-weight: 600;
}

.acquisition-note {
  padding: 12px 16px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  margin: 0;
}

.acquisition-note strong {
  color: var(--text);
}

/* FAQ Section */
.faq-section {
  margin-top: 32px;
}

.faq-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
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

.faq-answer strong {
  color: var(--text);
  font-weight: 600;
}

/* Internal Links Styling */
.intro a,
.intro-content a,
.section-subtitle a,
.acquisition-content a,
.acquisition-note a,
.faq-answer a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.intro a:hover,
.intro-content a:hover,
.section-subtitle a:hover,
.acquisition-content a:hover,
.acquisition-note a:hover,
.faq-answer a:hover {
  text-decoration: underline;
  color: var(--accent-2, rgba(139, 92, 246, 0.8));
}
</style>
