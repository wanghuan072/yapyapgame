<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">{{ t('Guides.hero.pill') }}</p>
        <h1 class="title">{{ t('Guides.hero.title') }}</h1>
        <p class="intro">
          {{ t('Guides.hero.intro') }}
        </p>
      </div>
    </section>
    <main class="container">
      <section class="guides-section">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state card">
          <p class="muted">{{ t('Guides.status.loading') }}</p>
        </div>

        <!-- Error State -->
        <div v-if="error" class="error-state card">
          <p class="muted">{{ t('Guides.status.error') }} {{ error }}</p>
        </div>

        <!-- Guides Grid -->
        <div v-if="!loading && !error" class="guides-grid">
          <a
            v-for="guide in allGuides"
            :key="guide.id"
            :href="getLocalizedPath(`/guides/${guide.addressBar}`)"
            class="guide-card card"
          >
            <div class="guide-image-container" v-if="guide.imageUrl">
              <img
                :src="guide.imageUrl"
                :alt="guide.imageAlt || guide.title"
                class="guide-image"
                loading="lazy"
              />
            </div>
            <div class="guide-card-content">
              <h3 class="guide-title">{{ guide.title }}</h3>
              <p class="guide-description">{{ guide.description }}</p>
              <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="guide-footer">
                <span class="update-date muted">{{ formatDate(guide.publishDate) }}</span>
                <span class="view-link">{{ t('Guides.card.readMore') }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- SEO Content Section -->
      <section class="seo-content-section">
        <div class="seo-content-card card">
          <h2 class="seo-title">{{ t('Guides.seo.title') }}</h2>
          <div class="seo-content">
            <p>
              <strong>{{ t('Guides.seo.section1.title') }}</strong>
            </p>
            <p>
              {{ t('Guides.seo.section1.text_1') }}<strong>{{ t('Guides.seo.section1.text_bold') }}</strong>{{ t('Guides.seo.section1.text_2') }}<a :href="getLocalizedPath('/spells')">{{ t('Guides.seo.section1.link1') }}</a>{{ t('Guides.seo.section1.text_3') }}<a :href="getLocalizedPath('/wiki/bestiary')">{{ t('Guides.seo.section1.link2') }}</a>{{ t('Guides.seo.section1.text_4') }}<a :href="getLocalizedPath('/puzzles/balance-puzzle')">{{ t('Guides.seo.section1.link3') }}</a>{{ t('Guides.seo.section1.text_5') }}<a :href="getLocalizedPath('/puzzles/door-puzzle')">{{ t('Guides.seo.section1.link4') }}</a>{{ t('Guides.seo.section1.text_6') }}<a :href="getLocalizedPath('/spells')">{{ t('Guides.seo.section1.link5') }}</a>{{ t('Guides.seo.section1.text_7') }}<strong>{{ t('Guides.seo.section1.text_bold2') }}</strong>{{ t('Guides.seo.section1.text_8') }}
            </p>
            <p>
              <strong>{{ t('Guides.seo.section2.title') }}</strong>
            </p>
            <p>
              {{ t('Guides.seo.section2.text_1') }}<strong>{{ t('Guides.seo.section2.text_bold') }}</strong>{{ t('Guides.seo.section2.text_2') }}<a :href="getLocalizedPath('/puzzles/door-puzzle')">{{ t('Guides.seo.section2.link1') }}</a>{{ t('Guides.seo.section2.text_3') }}<a :href="getLocalizedPath('/wiki/wands')">{{ t('Guides.seo.section2.link2') }}</a>{{ t('Guides.seo.section2.text_4') }}<a :href="getLocalizedPath('/spells')">{{ t('Guides.seo.section2.link3') }}</a>{{ t('Guides.seo.section2.text_5') }}<strong>{{ t('Guides.seo.section2.text_bold2') }}</strong>{{ t('Guides.seo.section2.text_6') }}<a :href="getLocalizedPath('/spell-generator')">{{ t('Guides.seo.section2.link4') }}</a>{{ t('Guides.seo.section2.text_7') }}<a :href="getLocalizedPath('/wiki/wands')">{{ t('Guides.seo.section2.link5') }}</a>{{ t('Guides.seo.section2.text_8') }}<a :href="getLocalizedPath('/puzzles/ball-puzzle')">{{ t('Guides.seo.section2.link6') }}</a>{{ t('Guides.seo.section2.text_9') }}<a :href="getLocalizedPath('/wiki/bestiary')">{{ t('Guides.seo.section2.link7') }}</a>{{ t('Guides.seo.section2.text_10') }}<strong>{{ t('Guides.seo.section2.text_bold3') }}</strong>{{ t('Guides.seo.section2.text_11') }}
            </p>
            <p>
              {{ t('Guides.seo.section3.text_1') }}<strong>{{ t('Guides.seo.section3.text_bold') }}</strong>{{ t('Guides.seo.section3.text_2') }}<a :href="getLocalizedPath('/wiki/wands')">{{ t('Guides.seo.section3.link1') }}</a>{{ t('Guides.seo.section3.text_3') }}<a :href="getLocalizedPath('/spells')">{{ t('Guides.seo.section3.link2') }}</a>{{ t('Guides.seo.section3.text_4') }}<a :href="getLocalizedPath('/puzzles/balance-puzzle')">{{ t('Guides.seo.section3.link3') }}</a>{{ t('Guides.seo.section3.text_5') }}<a :href="getLocalizedPath('/wiki/bestiary')">{{ t('Guides.seo.section3.link4') }}</a>{{ t('Guides.seo.section3.text_6') }}<strong>{{ t('Guides.seo.section3.text_bold2') }}</strong>{{ t('Guides.seo.section3.text_7') }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loading, error, loadData } = useGuideData()

const allGuides = computed(() => {
  return guides.value || []
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(async () => {
  await loadData()
})
</script>

<style scoped>

.guides-section {
  margin-top: 40px;
}

.loading-state,
.error-state {
  padding: 40px;
  text-align: center;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.guide-card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 24px rgba(139, 92, 246, 0.2);
}

.guide-image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(15, 20, 36, 0.6);
}

.guide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.guide-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.3;
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(1.3em * 2);
}

.guide-description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(1.6em * 3);
  word-wrap: break-word;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #dcd7ff;
  font-size: 11px;
  font-weight: 500;
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.update-date {
  font-size: 12px;
}

.view-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  transition: color 0.2s ease;
}

.guide-card:hover .view-link {
  color: var(--accent-2);
}

.muted {
  color: var(--muted);
}

.seo-content-section {
  margin-top: 60px;
  margin-bottom: 40px;
}

.seo-content-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 32px;
  box-shadow: var(--shadow);
}

.seo-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 24px 0;
  color: var(--text);
  line-height: 1.3;
}

.seo-content {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.seo-content p {
  margin: 0 0 16px 0;
}

.seo-content p:last-child {
  margin-bottom: 0;
}

.seo-content strong {
  color: var(--text);
  font-weight: 600;
}

.seo-content a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.seo-content a:hover {
  text-decoration: underline;
  color: var(--accent-2, rgba(139, 92, 246, 0.8));
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  /* 板块间距 */
  .guides-section,
  .seo-content-section {
    padding: 0.8rem 0;
    margin: 0.8rem 0;
  }

  /* card padding */
  .card {
    padding: 0.8rem;
  }

  .guide-card {
    padding: 0;
  }

  .guide-card-content {
    padding: 0.8rem;
  }

  .loading-state,
  .error-state {
    padding: 0.8rem;
  }

  .seo-content-card {
    padding: 0.8rem;
  }

  /* h1 - 使用class选择器 */
  .title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h2 - 使用class选择器 */
  .seo-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  /* h3 - 使用class选择器 */
  .guide-title {
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

  .guide-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .seo-content {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .seo-content p {
    margin-bottom: 0.7rem;
  }

  /* 布局调整 */
  .guides-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .guide-tags {
    gap: 0.5rem;
    margin-bottom: 0.7rem;
  }

  .tag {
    padding: 0.4rem 0.7rem;
    font-size: 0.7rem;
  }

  .guide-footer {
    padding-top: 0.7rem;
  }

  .update-date {
    font-size: 0.7rem;
  }

  .view-link {
    font-size: 0.8rem;
  }

  .muted {
    font-size: 0.8rem;
  }
}
</style>