<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ t('Wiki.Home.pill') }}</p>
        <h1 class="title">{{ t('Wiki.Home.title') }}</h1>
        <p class="intro" v-html="t('Wiki.Home.intro')"></p>
      </div>
    </section>
    <main class="container">
      <div class="work-in-progress card">
        <span class="wip-icon">⚠️</span>
        <div>
          <p><strong>{{ t('Wiki.Home.wip.title') }}</strong></p>
          <p class="muted">{{ t('Wiki.Home.wip.text') }}</p>
        </div>
      </div>

      <!-- Core Loop Introduction -->
      <section class="core-loop-section">
        <h2 class="section-title">{{ t('Wiki.Home.coreLoop.title') }}</h2>
        <div class="core-loop-content card">
          <p v-html="t('Wiki.Home.coreLoop.content')"></p>
        </div>
      </section>

      <!-- Wiki Navigation Grid -->
      <section class="wiki-grid-section">
        <h2 class="section-title">{{ t('Wiki.Home.grid.title') }}</h2>
        <p class="section-subtitle muted" style="margin-bottom: 24px;" v-html="t('Wiki.Home.grid.subtitle')"></p>
        <div class="wiki-grid">
          <router-link :to="getLocalizedPath('/wiki/wands')" class="wiki-card card">
            <div class="wiki-card-icon">🪄</div>
            <h2 class="wiki-card-title">{{ t('Wiki.Home.grid.wands.title') }}</h2>
            <p class="wiki-card-desc" v-html="t('Wiki.Home.grid.wands.desc')"></p>
            <div class="wiki-card-keywords muted">{{ t('Wiki.Home.grid.wands.keywords') }}</div>
          </router-link>

          <router-link :to="getLocalizedPath('/wiki/bestiary')" class="wiki-card card">
            <div class="wiki-card-icon">👹</div>
            <h2 class="wiki-card-title">{{ t('Wiki.Home.grid.bestiary.title') }}</h2>
            <p class="wiki-card-desc" v-html="t('Wiki.Home.grid.bestiary.desc')"></p>
            <div class="wiki-card-keywords muted">{{ t('Wiki.Home.grid.bestiary.keywords') }}</div>
          </router-link>

          <router-link :to="getLocalizedPath('/wiki/potions')" class="wiki-card card">
            <div class="wiki-card-icon">🧪</div>
            <h2 class="wiki-card-title">{{ t('Wiki.Home.grid.potions.title') }}</h2>
            <p class="wiki-card-desc" v-html="t('Wiki.Home.grid.potions.desc')"></p>
            <div class="wiki-card-keywords muted">{{ t('Wiki.Home.grid.potions.keywords') }}</div>
          </router-link>
        </div>
      </section>

      <!-- Featured / Meta Picks -->
      <section class="featured-section">
        <h2 class="section-title">{{ t('Wiki.Home.featured.title') }}</h2>
        <p class="section-subtitle muted" style="margin-bottom: 24px;" v-html="t('Wiki.Home.featured.subtitle')"></p>
        <div class="featured-grid">
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">💰</span>
              <h3 class="featured-title">{{ t('Wiki.Home.featured.loot.title') }}</h3>
            </div>
            <ul class="featured-list">
              <li><router-link :to="getLocalizedPath('/wiki/potions')">{{ t('Wiki.Home.featured.loot.list.chalice') }}</router-link> - {{ t('Wiki.Home.featured.loot.list.chaliceDesc') }}</li>
              <li><router-link :to="getLocalizedPath('/wiki/potions')">{{ t('Wiki.Home.featured.loot.list.shard') }}</router-link> - {{ t('Wiki.Home.featured.loot.list.shardDesc') }}</li>
              <li><router-link :to="getLocalizedPath('/wiki/potions')">{{ t('Wiki.Home.featured.loot.list.tome') }}</router-link> - {{ t('Wiki.Home.featured.loot.list.tomeDesc') }}</li>
            </ul>
          </div>
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">🪄</span>
              <h3 class="featured-title">{{ t('Wiki.Home.featured.wand.title') }}</h3>
            </div>
            <p class="featured-content">
              <router-link :to="getLocalizedPath('/wiki/wands')">{{ t('Wiki.Home.featured.wand.name') }}</router-link> - <span v-html="t('Wiki.Home.featured.wand.content')"></span>
            </p>
          </div>
          <div class="featured-card card">
            <div class="featured-header">
              <span class="featured-icon">👹</span>
              <h3 class="featured-title">{{ t('Wiki.Home.featured.enemy.title') }}</h3>
            </div>
            <p class="featured-content">
              <router-link :to="getLocalizedPath('/wiki/bestiary')">{{ t('Wiki.Home.featured.enemy.name') }}</router-link> - <span v-html="t('Wiki.Home.featured.enemy.content')"></span>
            </p>
          </div>
        </div>
      </section>

      <!-- Global Mechanics Breakdown -->
      <section class="mechanics-section">
        <h2 class="section-title">{{ t('Wiki.Home.mechanics.title') }}</h2>
        <p class="section-subtitle muted" style="margin-bottom: 24px;" v-html="t('Wiki.Home.mechanics.subtitle')"></p>
        
        <div class="mechanics-grid">
          <!-- Rarity Guide -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">{{ t('Wiki.Home.mechanics.rarity.title') }}</h3>
            <p class="mechanic-desc" v-html="t('Wiki.Home.mechanics.rarity.desc')"></p>
            <div class="rarity-list">
              <div class="rarity-item">
                <span class="rarity-color common">⬜</span>
                <div>
                  <strong>{{ t('Wiki.Home.mechanics.rarity.common') }}</strong> {{ t('Wiki.Home.mechanics.rarity.commonDesc') }}
                </div>
              </div>
              <div class="rarity-item">
                <span class="rarity-color rare">🔵</span>
                <div>
                  <strong>{{ t('Wiki.Home.mechanics.rarity.rare') }}</strong> {{ t('Wiki.Home.mechanics.rarity.rareDesc') }}
                </div>
              </div>
              <div class="rarity-item">
                <span class="rarity-color legendary">🟨</span>
                <div>
                  <strong>{{ t('Wiki.Home.mechanics.rarity.legendary') }}</strong> {{ t('Wiki.Home.mechanics.rarity.legendaryDesc') }}
                </div>
              </div>
            </div>
            <p class="mechanic-note muted">
              {{ t('Wiki.Home.mechanics.rarity.keywords') }}
            </p>
          </div>

          <!-- Weight & Stamina System -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">{{ t('Wiki.Home.mechanics.weight.title') }}</h3>
            <p class="mechanic-desc" v-html="t('Wiki.Home.mechanics.weight.desc')"></p>
            <ul class="mechanic-list">
              <li v-html="t('Wiki.Home.mechanics.weight.list.l1')"></li>
              <li v-html="t('Wiki.Home.mechanics.weight.list.l2')"></li>
              <li v-html="t('Wiki.Home.mechanics.weight.list.l3')"></li>
              <li v-html="t('Wiki.Home.mechanics.weight.list.l4')"></li>
            </ul>
            <p class="mechanic-note muted">
              {{ t('Wiki.Home.mechanics.weight.note') }}
            </p>
          </div>

          <!-- Sound & Noise Tiers -->
          <div class="mechanic-card card">
            <h3 class="mechanic-title">{{ t('Wiki.Home.mechanics.sound.title') }}</h3>
            <p class="mechanic-desc" v-html="t('Wiki.Home.mechanics.sound.desc')"></p>
            <div class="noise-tiers">
              <div class="noise-tier">
                <strong>{{ t('Wiki.Home.mechanics.sound.whisper') }}</strong> {{ t('Wiki.Home.mechanics.sound.whisperDesc') }}
              </div>
              <div class="noise-tier">
                <strong>{{ t('Wiki.Home.mechanics.sound.talk') }}</strong> {{ t('Wiki.Home.mechanics.sound.talkDesc') }}
              </div>
              <div class="noise-tier">
                <strong>{{ t('Wiki.Home.mechanics.sound.shout') }}</strong> {{ t('Wiki.Home.mechanics.sound.shoutDesc') }}
              </div>
            </div>
            <p class="mechanic-note muted" v-html="t('Wiki.Home.mechanics.sound.note')"></p>
          </div>
        </div>
      </section>

      <!-- Contribution & Patch Notes -->
      <section class="contribution-section">
        <div class="contribution-card card">
          <h3 class="contribution-title">{{ t('Wiki.Home.contribution.title') }}</h3>
          <p class="contribution-text" v-html="t('Wiki.Home.contribution.text1')"></p>
          <p class="contribution-text" v-html="t('Wiki.Home.contribution.text2')"></p>
          <!-- <div class="contribution-cta">
            <a href="#" class="btn btn-primary">Join Discord Community</a>
          </div> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<style scoped>

.work-in-progress {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.35);
  border-radius: 12px;
}

.wip-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.work-in-progress p {
  margin: 0 0 4px 0;
  line-height: 1.5;
}

.work-in-progress p:last-child {
  margin: 0;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: var(--text);
}

/* Core Loop Section */
.core-loop-section {
  margin-top: 40px;
}

.core-loop-content {
  padding: 24px 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.core-loop-content p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.core-loop-content strong {
  color: var(--text);
  font-weight: 600;
}

/* Featured Section */
.featured-section {
  margin-top: 48px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.featured-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.featured-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.featured-icon {
  font-size: 28px;
}

.featured-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.featured-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.featured-list li {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 14px;
}

.featured-list li:last-child {
  border-bottom: none;
}

.featured-list a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-list a:hover {
  color: var(--accent-2);
}

.featured-content {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.featured-content a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-content a:hover {
  color: var(--accent-2);
}

/* Wiki Grid Section */
.wiki-grid-section {
  margin-top: 48px;
}

.wiki-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.wiki-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.wiki-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 24px rgba(139, 92, 246, 0.2);
}

.wiki-card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.wiki-card-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.wiki-card-desc {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
  flex-grow: 1;
}

.wiki-card-keywords {
  font-size: 12px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

/* Mechanics Section */
.mechanics-section {
  margin-top: 48px;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.mechanic-card {
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.mechanic-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.mechanic-desc {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.mechanic-desc strong {
  color: var(--text);
  font-weight: 600;
}

.rarity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.rarity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 10px;
}

.rarity-color {
  font-size: 20px;
  flex-shrink: 0;
}

.rarity-item strong {
  color: var(--text);
  display: block;
  margin-bottom: 4px;
}

.mechanic-list {
  padding-left: 20px;
  margin: 0 0 16px 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.mechanic-list li {
  margin-bottom: 8px;
}

.noise-tiers {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.noise-tier {
  padding: 10px 14px;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 10px;
  font-size: 14px;
  color: var(--muted);
}

.noise-tier strong {
  color: var(--text);
}

.mechanic-note {
  font-size: 12px;
  margin: 0;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

/* Contribution Section */
.contribution-section {
  margin-top: 48px;
}

.contribution-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  text-align: center;
}

.contribution-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text);
}

.contribution-text {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.contribution-text strong {
  color: var(--text);
  font-weight: 600;
}

.contribution-cta {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: var(--text);
}

.btn-primary:hover {
  background: rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 0.6);
}

/* Internal Links Styling */
.intro a,
.core-loop-content a,
.section-subtitle a,
.featured-content a,
.mechanic-desc a,
.mechanic-note a,
.contribution-text a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.intro a:hover,
.core-loop-content a:hover,
.section-subtitle a:hover,
.featured-content a:hover,
.mechanic-desc a:hover,
.mechanic-note a:hover,
.contribution-text a:hover {
  text-decoration: underline;
  color: var(--accent-2, rgba(139, 92, 246, 0.8));
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .wiki-grid,
  .featured-grid,
  .mechanics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .core-loop-section,
  .wiki-grid-section,
  .featured-section,
  .mechanics-section,
  .contribution-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .work-in-progress {
    padding: 0.8rem;
    gap: 0.7rem;
  }

  .core-loop-content {
    padding: 0.8rem;
  }

  .wiki-card {
    padding: 0.8rem;
  }

  .featured-card {
    padding: 0.8rem;
  }

  .mechanic-card {
    padding: 0.8rem;
  }

  .contribution-card {
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

  .wiki-card-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h3 - 使用class选择器 */
  .featured-title,
  .mechanic-title,
  .contribution-title {
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

  .core-loop-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .wiki-card-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .featured-content {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .mechanic-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .contribution-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .work-in-progress p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  /* 布局调整 */
  .wiki-grid,
  .featured-grid,
  .mechanics-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .featured-header {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .featured-icon {
    font-size: 1.5rem;
  }

  .featured-list li {
    padding: 0.5rem 0;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .wiki-card-icon {
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }

  .wiki-card-keywords {
    font-size: 0.7rem;
    padding-top: 0.7rem;
  }

  .rarity-list {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .rarity-item {
    padding: 0.8rem;
    gap: 0.7rem;
  }

  .rarity-color {
    font-size: 1.2rem;
  }

  .rarity-item strong {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .mechanic-list {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
  }

  .mechanic-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .noise-tiers {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .noise-tier {
    padding: 0.7rem;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .mechanic-note {
    font-size: 0.7rem;
    padding-top: 0.7rem;
  }

  .muted {
    font-size: 0.8rem;
  }
}
</style>
