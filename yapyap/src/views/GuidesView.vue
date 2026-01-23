<template>
  <div class="page" id="top">
    <main class="container">
      <section class="page-hero">
        <p class="pill">Guides · Walkthroughs · Tips & Strategies</p>
        <h1 class="title">YAPYAP Guides</h1>
        <p class="intro">
          Comprehensive guides, walkthroughs, and strategies to help you master YAPYAP. From beginner tips to advanced techniques.
        </p>
      </section>

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
            :href="`/guide/${guide.addressBar}`"
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
.pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  font-size: 13px;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
}

.title {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin: 0 0 12px 0;
}

.intro {
  color: var(--muted);
  max-width: 720px;
  margin: 0;
}

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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
  height: 200px;
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
}

.guide-description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex-grow: 1;
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

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }

  .guides-grid {
    grid-template-columns: 1fr;
  }
}
</style>
