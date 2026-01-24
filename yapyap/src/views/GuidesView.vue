<template>
  <div class="page" id="top">
    <section class="page-hero">
      <div class="container">
        <p class="pill">Guides · Walkthroughs · Tips & Strategies</p>
        <h1 class="title">YAPYAP Guides</h1>
        <p class="intro">
          Comprehensive guides, walkthroughs, and strategies to help you master YAPYAP. From beginner tips to advanced techniques.
        </p>
      </div>
    </section>
    <main class="container">
      <section class="guides-section">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state card">
          <p class="muted">Loading guides...</p>
        </div>

        <!-- Error State -->
        <div v-if="error" class="error-state card">
          <p class="muted">Error: {{ error }}</p>
        </div>

        <!-- Guides Grid -->
        <div v-if="!loading && !error" class="guides-grid">
          <a
            v-for="guide in allGuides"
            :key="guide.id"
            :href="`/guides/${guide.addressBar}`"
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
                <span class="view-link">Read more →</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- SEO Content Section -->
      <section class="seo-content-section">
        <div class="seo-content-card card">
          <h2 class="seo-title">Why Read Our YAPYAP Strategy Guides?</h2>
          <div class="seo-content">
            <p>
              <strong>Mastering the Chaos of Maison Bap's World</strong>
            </p>
            <p>
              YAPYAP is not just a horror game; it's a test of communication and voice recognition. Our <strong>YAPYAP guides</strong> go beyond simple walkthroughs. We analyze the ragdoll physics, <a href="/spells">spell interactions</a>, and <a href="/wiki/bestiary">monster AI</a> to help you survive. Whether you're struggling with the <a href="/puzzles/balance-puzzle">YAPYAP Balance Puzzle</a>, the <a href="/puzzles/door-puzzle">Face Gate puzzle</a>, or mastering <a href="/spells">voice spells</a>, our comprehensive <strong>YAPYAP strategy guides</strong> provide the insights you need.
            </p>
            <p>
              <strong>From Beginner to Archmage</strong>
            </p>
            <p>
              Whether you are looking for a <strong>YAPYAP beginner guide</strong> to fix your microphone settings, or advanced strategies for the <a href="/puzzles/door-puzzle">Face Gate puzzle</a>, our database is constantly updated. We test every <a href="/wiki/wands">wand type</a> and <a href="/spells">incantation</a> in the Demo and Full Release to ensure accuracy. Our <strong>YAPYAP guides</strong> cover everything from <a href="/spell-generator">spell pronunciation</a> and <a href="/wiki/wands">wand selection</a> to <a href="/puzzles/ball-puzzle">puzzle solutions</a> and <a href="/wiki/bestiary">enemy tactics</a>. Each guide is crafted by experienced players who understand the nuances of voice recognition, spell casting mechanics, and the unique challenges of <strong>YAPYAP gameplay</strong>.
            </p>
            <p>
              Our <strong>YAPYAP strategy guides</strong> are more than just instructions—they're your roadmap to mastering this challenging co-op horror experience. Learn how to optimize your <a href="/wiki/wands">wand loadout</a>, perfect your <a href="/spells">spell casting</a>, solve complex <a href="/puzzles/balance-puzzle">puzzles</a>, and survive encounters with dangerous <a href="/wiki/bestiary">creatures</a>. With detailed explanations, step-by-step walkthroughs, and expert tips, our <strong>YAPYAP guides</strong> will transform you from a struggling newcomer into a confident player ready to tackle the tower's most difficult challenges.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useGuideData } from '../composables/useGuideData'

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
