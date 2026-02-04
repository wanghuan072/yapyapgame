<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ t('Wiki.Home.breadcrumbs.home') }}</router-link>
          <span class="separator">></span>
          <router-link to="/wiki">{{ t('Wiki.Home.breadcrumbs.wiki') }}</router-link>
          <span class="separator">></span>
          <span>{{ t('Wiki.Bestiary.title').split(':')[0] }}</span>
        </nav>
        <p class="pill">{{ t('Wiki.Bestiary.pill') }}</p>
        <h1 class="title">{{ t('Wiki.Bestiary.title') }}</h1>
        <p class="intro" v-html="t('Wiki.Bestiary.intro')"></p>
      </div>
    </section>
    <main class="container">

      <!-- Enemy List -->
      <section class="wiki-content card">
        <div class="section-head">
          <h2 class="section-title">{{ t('Wiki.Bestiary.table.title') }}</h2>
          <p class="section-subtitle" v-html="t('Wiki.Bestiary.table.subtitle')"></p>
        </div>

        <!-- Desktop table -->
        <div class="table card" aria-label="All YAPYAP enemies list">
          <div class="row head">
            <div class="image">{{ t('Wiki.Bestiary.table.headers.image') }}</div>
            <div class="name">{{ t('Wiki.Bestiary.table.headers.name') }}</div>
            <div class="danger">{{ t('Wiki.Bestiary.table.headers.danger') }}</div>
            <div class="characteristics">{{ t('Wiki.Bestiary.table.headers.characteristics') }}</div>
          </div>

          <div class="row" v-for="enemy in enemies" :key="enemy.name">
            <div class="c image">
              <div class="image-placeholder">
                <img :src="enemy.image" :alt="enemy.name" />
              </div>
            </div>
            <div class="c name">
              <strong>{{ enemy.name }}</strong>
            </div>
            <div class="c danger">
              <div class="threat-info">
                <span class="threat-badge" :class="`threat-${enemy.threatLevel}`">
                  {{ enemy.threat }}
                </span>
                <span class="threat-desc">{{ enemy.threatDesc }}</span>
              </div>
            </div>
            <div class="c characteristics">
              <div class="characteristics-content">
                <div class="traits-section" v-if="enemy.traits">
                  <strong class="section-label">{{ t('Wiki.Bestiary.table.labels.traits') }}</strong>
                  <p class="traits-text">{{ enemy.traits }}</p>
                </div>
                <div class="strategy-section" v-if="enemy.strategy">
                  <strong class="section-label">{{ t('Wiki.Bestiary.table.labels.strategy') }}</strong>
                  <ol class="strategy-list" v-if="Array.isArray(enemy.strategy)">
                    <li v-for="(item, idx) in enemy.strategy" :key="idx">{{ item }}</li>
                  </ol>
                  <p class="strategy-text" v-else>{{ enemy.strategy }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile cards -->
        <div class="cards-mobile">
          <div class="enemy-card card" v-for="enemy in enemies" :key="enemy.name">
            <div class="enemy-card-header">
              <div class="enemy-image">
                <div class="image-placeholder">
                  <img v-if="enemy.image" :src="enemy.image" :alt="enemy.name" />
                  <span v-else>{{ enemy.icon }}</span>
                </div>
              </div>
              <div>
                <h3 class="enemy-name">{{ enemy.name }}</h3>
                <div class="enemy-meta">
                  <span class="threat-badge" :class="`threat-${enemy.threatLevel}`">
                    {{ enemy.threat }}
                  </span>
                  <span class="threat-desc">{{ enemy.threatDesc }}</span>
                </div>
              </div>
            </div>
            <div class="enemy-characteristics">
              <div class="traits-section" v-if="enemy.traits">
                <strong class="section-label">{{ t('Wiki.Bestiary.table.labels.traits') }}</strong>
                <p class="traits-text">{{ enemy.traits }}</p>
              </div>
              <div class="strategy-section" v-if="enemy.strategy">
                <strong class="section-label">{{ t('Wiki.Bestiary.table.labels.strategy') }}</strong>
                <ol class="strategy-list" v-if="Array.isArray(enemy.strategy)">
                  <li v-for="(item, idx) in enemy.strategy" :key="idx">{{ item }}</li>
                </ol>
                <p class="strategy-text" v-else>{{ enemy.strategy }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Mechanics: Two Column Layout -->
      <section class="mechanics-section">
        <div class="mechanics-grid">
          <!-- Audio Detection -->
          <div class="mechanics-card card">
            <h2 class="section-title">{{ t('Wiki.Bestiary.mechanics.audio.title') }}</h2>
            <div class="mechanics-content">
              <p v-html="t('Wiki.Bestiary.mechanics.audio.intro')"></p>
              
              <div class="mechanics-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.audio.mic.title') }}</h3>
                <p v-html="t('Wiki.Bestiary.mechanics.audio.mic.text')"></p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.audio.noise.title') }}</h3>
                <p v-html="t('Wiki.Bestiary.mechanics.audio.noise.text')"></p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.audio.detection.title') }}</h3>
                <ul class="topic-list">
                  <li v-for="(item, index) in tm('Wiki.Bestiary.mechanics.audio.detection.list')" :key="index" v-html="item"></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Farming Strategy -->
          <div class="mechanics-card card">
            <h2 class="section-title">{{ t('Wiki.Bestiary.mechanics.farming.title') }}</h2>
            <div class="mechanics-content">
              <p v-html="t('Wiki.Bestiary.mechanics.farming.intro')"></p>

              <div class="mechanics-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.farming.goblins.title') }}</h3>
                <p v-html="t('Wiki.Bestiary.mechanics.farming.goblins.text')"></p>
                <p class="topic-note" v-html="t('Wiki.Bestiary.mechanics.farming.goblins.note')"></p>
              </div>

              <div class="mechanics-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.farming.guards.title') }}</h3>
                <p v-html="t('Wiki.Bestiary.mechanics.farming.guards.text')"></p>
              </div>

              <div class="mechanics-topic warning-topic">
                <h3 class="topic-title">{{ t('Wiki.Bestiary.mechanics.farming.greed.title') }}</h3>
                <p v-html="t('Wiki.Bestiary.mechanics.farming.greed.text')"></p>
                <p class="topic-warning" v-html="t('Wiki.Bestiary.mechanics.farming.greed.warning')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Death Penalties -->
      <section class="death-section">
        <div class="death-card card">
          <h2 class="section-title">{{ t('Wiki.Bestiary.death.title') }}</h2>
          <div class="death-content">
            <p v-html="t('Wiki.Bestiary.death.text1')"></p>
            <p v-html="t('Wiki.Bestiary.death.text2')"></p>
            <div class="death-warning">
              <div class="warning-icon">⚠️</div>
              <div class="warning-content">
                <strong v-html="t('Wiki.Bestiary.death.warning')"></strong>
                <p>{{ t('Wiki.Bestiary.death.warningText') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Guides -->
      <section class="related-section">
        <div class="related-card card">
          <h2 class="section-title">{{ t('Wiki.Bestiary.related.title') }}</h2>
          <div class="related-links">
            <router-link to="/wiki/wands" class="related-link">
              <div class="link-icon">🪄</div>
              <div class="link-content">
                <h3 class="link-title">{{ t('Wiki.Bestiary.related.wands.title') }}</h3>
                <p class="link-desc" v-html="t('Wiki.Bestiary.related.wands.desc')"></p>
              </div>
            </router-link>
            <router-link to="/spells" class="related-link">
              <div class="link-icon">✨</div>
              <div class="link-content">
                <h3 class="link-title">{{ t('Wiki.Bestiary.related.spells.title') }}</h3>
                <p class="link-desc" v-html="t('Wiki.Bestiary.related.spells.desc')"></p>
              </div>
            </router-link>
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

const enemiesData = [
  {
    id: 'goblins',
    image: '/images/bestiary/bestiary-01.webp',
    threatLevel: 'low',
  },
  {
    id: 'guards',
    image: '/images/bestiary/bestiary-02.webp',
    threatLevel: 'high',
  },
  {
    id: 'headless_guards',
    image: '/images/bestiary/bestiary-03.webp',
    threatLevel: 'very-high',
  },
  {
    id: 'jester',
    image: '/images/bestiary/bestiary-04.webp',
    threatLevel: 'critical',
  },
  {
    id: 'eye',
    image: '/images/bestiary/bestiary-05.webp',
    threatLevel: 'high',
  },
  {
    id: 'slime',
    image: '/images/bestiary/bestiary-06.webp',
    threatLevel: 'situational',
  },
  {
    id: 'time_ghost',
    image: '/images/bestiary/bestiary-07.webp',
    threatLevel: 'unavoidable',
  },
]

const enemies = computed(() => enemiesData.map(enemy => {
  const data = tm(`Wiki.Bestiary.enemies.${enemy.id}`)
  return {
    ...enemy,
    ...data
  }
}))
</script>

<style scoped>

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
  grid-template-columns: 140px 1fr 180px 2.5fr;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid var(--border);
  align-items: center;
  transition: background-color 0.2s ease;
}

.table .row:not(.head):hover {
  background: rgba(139, 92, 246, 0.05);
}

.table .row:not(.head) {
  min-height: 120px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.table .row:not(.head):hover .image-placeholder {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3);
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.table .c.name {
  display: flex;
  align-items: center;
}

.table .c.name strong {
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
}

.table .c.danger {
  display: flex;
  align-items: flex-start;
}

.threat-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.threat-desc {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.4;
}

.table .c.characteristics {
  min-width: 0;
}

.characteristics-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.traits-section,
.strategy-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.traits-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.strategy-list {
  padding-left: 20px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
  list-style: decimal;
}

.strategy-list li::marker {
  color: rgba(139, 92, 246, 0.6);
}

.strategy-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.threat-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.threat-low {
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.35);
  color: #86efac;
}

.threat-high {
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #fcd34d;
}

.threat-very-high {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fca5a5;
}

.threat-critical,
.threat-unavoidable {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(239, 68, 68, 0.6);
  color: #ef4444;
  font-weight: 700;
}

.threat-situational {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.35);
  color: #dcd7ff;
}

.sensitivity-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.sensitivity-high,
.sensitivity-extreme {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fca5a5;
}

.sensitivity-medium {
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #fcd34d;
}

.sensitivity-low {
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.35);
  color: #86efac;
}

.sensitivity-deaf {
  background: rgba(156, 163, 175, 0.15);
  border: 1px solid rgba(156, 163, 175, 0.35);
  color: #d1d5db;
}

.strategy-text {
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
}

.cards-mobile {
  display: none;
  flex-direction: column;
  gap: 16px;
}

.enemy-card {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.enemy-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.enemy-image {
  flex-shrink: 0;
}

.enemy-image .image-placeholder {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.enemy-image .image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.enemy-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.enemy-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.enemy-characteristics {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.enemy-characteristics .traits-section,
.enemy-characteristics .strategy-section {
  padding: 16px;
  background: rgba(15, 20, 36, 0.4);
  border-radius: 10px;
  border: 1px solid var(--border);
}

/* Mechanics Section */
.mechanics-section {
  margin-top: 32px;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.mechanics-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.mechanics-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.mechanics-content strong {
  color: var(--text);
  font-weight: 600;
}

.mechanics-topic {
  margin-top: 20px;
  padding: 16px;
  background: rgba(15, 20, 36, 0.6);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.mechanics-topic:first-of-type {
  margin-top: 0;
}

.mechanics-topic.warning-topic {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.topic-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--text);
}

.topic-list {
  padding-left: 24px;
  margin: 12px 0 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.topic-list li {
  margin-bottom: 8px;
}

.topic-list strong {
  color: var(--text);
  font-weight: 600;
}

.topic-note {
  padding: 12px;
  background: rgba(139, 92, 246, 0.1);
  border-left: 3px solid rgba(139, 92, 246, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 12px;
}

.topic-note strong {
  color: var(--text);
  font-weight: 600;
}

.topic-warning {
  padding: 12px;
  background: rgba(251, 191, 36, 0.1);
  border-left: 3px solid rgba(251, 191, 36, 0.5);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 12px;
}

.topic-warning strong {
  color: var(--text);
  font-weight: 600;
}

/* Death Section */
.death-section {
  margin-top: 32px;
}

.death-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.death-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin: 0 0 16px 0;
}

.death-content strong {
  color: var(--text);
  font-weight: 600;
}

.death-warning {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  margin-top: 20px;
}

.warning-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.warning-content {
  flex-grow: 1;
}

.warning-content strong {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.warning-content p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

/* Related Section */
.related-section {
  margin-top: 32px;
}

.related-card {
  padding: 28px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.related-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.related-link {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.related-link:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

.link-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.link-content {
  flex-grow: 1;
}

.link-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text);
}

.link-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
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
  .mechanics-section,
  .death-section,
  .related-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  .wiki-content {
    margin-top: 0.8rem;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .wiki-content,
  .mechanics-card,
  .death-card,
  .related-card {
    padding: 0.8rem;
  }

  .enemy-card {
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
  .enemy-name,
  .topic-title,
  .link-title {
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

  .mechanics-content p,
  .death-content p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .topic-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .link-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .traits-text,
  .strategy-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .section-head {
    margin-bottom: 0.7rem;
  }

  .mechanics-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .related-links {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .mechanics-topic {
    margin-bottom: 0.7rem;
  }

  .topic-list {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
  }

  .topic-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .topic-note,
  .topic-warning {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-top: 0.7rem;
    padding: 0.7rem;
  }

  .death-warning {
    margin-top: 0.7rem;
    padding: 0.8rem;
    gap: 0.7rem;
  }

  .warning-icon {
    font-size: 1.5rem;
  }

  .warning-content {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .enemy-card-header {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .enemy-characteristics {
    margin-top: 0.7rem;
  }

  .traits-section,
  .strategy-section {
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .section-label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .strategy-list {
    padding-left: 1rem;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .strategy-list li {
    margin-bottom: 0.5rem;
  }

  .threat-info {
    gap: 0.5rem;
  }

  .threat-desc {
    font-size: 0.7rem;
    line-height: 1.2;
  }
}
</style>
