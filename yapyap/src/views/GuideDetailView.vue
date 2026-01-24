<template>
  <div class="guide-detail-view">
    <!-- Guide Detail Header -->
    <section class="page-hero" v-if="guide">
      <div class="container">
        <nav class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">></span>
          <a href="/guides">Guides</a>
          <span class="separator">></span>
          <span>{{ guide.title }}</span>
        </nav>

        <div class="guide-detail-content">
          <div class="guide-detail-text">
            <h1 class="guide-title">{{ guide.title }}</h1>

            <div class="guide-detail-meta">
              <div class="meta-item">
                <svg
                  class="meta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(guide.publishDate) }}</span>
              </div>
            </div>

            <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
              <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Content -->
    <section class="guide-content" v-if="guide">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="guide.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="guide-info-box card">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ guide?.title }}</h3>
              </div>
              <!-- Guide Meta Info -->
              <div class="guide-meta">
                <div class="meta-item">
                  <svg
                    class="meta-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                </div>
              </div>

              <!-- Guide Tags -->
              <div class="guide-tags" v-if="guide?.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Guide navigation -->
            <div class="guide-navigation card" v-if="previousGuide || nextGuide">
              <h4 class="nav-title">Navigation</h4>
              <div class="nav-grid">
                <a
                  v-if="previousGuide"
                  :href="`/guide/${previousGuide.addressBar}`"
                  class="nav-card nav-card-prev"
                >
                  <div class="nav-card-direction">Previous</div>
                  <div class="nav-card-title">{{ previousGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(previousGuide.publishDate) }}</span>
                  </div>
                </a>
                <a
                  v-if="nextGuide"
                  :href="`/guide/${nextGuide.addressBar}`"
                  class="nav-card nav-card-next"
                >
                  <div class="nav-card-direction">Next</div>
                  <div class="nav-card-title">{{ nextGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(nextGuide.publishDate) }}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="guide-content" v-else>
      <div class="container">
        <div class="not-found card">
          <h2>Guide Not Found</h2>
          <p>The guide you're looking for doesn't exist.</p>
          <a href="/guide/overview" class="btn btn-primary">Back to Guides</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'
import { useSEO } from '../composables/useSEO'

const route = useRoute()
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const { setSEO } = useSEO()
const guide = ref(null)
const contentRef = ref(null)

// 更新 SEO
const updateSEO = () => {
  if (guide.value) {
    const seoData = guide.value.seo || {}
    setSEO({
      title: seoData.title || `${guide.value.title} - YAPYAP Game Guide`,
      description: seoData.description || guide.value.description || 'YAPYAP game guide and walkthrough.',
      keywords: seoData.keywords || guide.value.tags?.join(', ') || 'YAPYAP guide, game walkthrough',
      type: 'article',
    })
  }
}

// 初始化加载数据并查找 guide
const initGuide = async () => {
  await loadData()
  const guideSlug = route.params.slug
  guide.value = findGuideByAddressBar(guideSlug)
  updateSEO()
}

onMounted(async () => {
  await initGuide()
})

// 监听路由参数变化，更新当前 guide
watch(
  () => route.params.slug,
  async () => {
    await loadData()
    const guideSlug = route.params.slug
    guide.value = findGuideByAddressBar(guideSlug)
    updateSEO()
  }
)

// 监听 guide 变化，更新 SEO
watch(
  () => guide.value,
  () => {
    updateSEO()
  }
)

const currentGuideIndex = computed(() => {
  if (!guide.value) return -1
  return guides.value.findIndex((g) => g.id === guide.value.id)
})

const previousGuide = computed(() => {
  if (currentGuideIndex.value <= 0) return null
  return guides.value[currentGuideIndex.value - 1] || null
})

const nextGuide = computed(() => {
  if (currentGuideIndex.value === -1) return null
  return guides.value[currentGuideIndex.value + 1] || null
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
</script>

<style scoped>
.guide-detail-view {
  min-height: 100vh;
}

/* Guide Detail Header */

.guide-detail-content {
  margin-top: 20px;
}


/* Guide Title (H1) */
.guide-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px 0;
  color: var(--text);
}

.guide-detail-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;
}

.meta-icon {
  width: 18px;
  height: 18px;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #dcd7ff;
  font-size: 12px;
  font-weight: 500;
}

/* Guide Content */
.guide-content {
  padding: 40px 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}

.left-content {
  min-width: 0;
}

.detail-article {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
}

.detail-article :deep(h2) {
  font-size: 28px;
  font-weight: 700;
  margin: 40px 0 20px 0;
  color: var(--text);
}

.detail-article :deep(h3) {
  font-size: 22px;
  font-weight: 600;
  margin: 32px 0 16px 0;
  color: var(--text);
}

.detail-article :deep(p) {
  margin: 0 0 16px 0;
  color: var(--muted);
}

.detail-article :deep(ul),
.detail-article :deep(ol) {
  margin: 0 0 16px 0;
  padding-left: 24px;
  color: var(--muted);
}

.detail-article :deep(li) {
  margin-bottom: 8px;
}

.detail-article :deep(strong) {
  color: var(--text);
  font-weight: 600;
}

.detail-article :deep(a) {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

.detail-article :deep(a:hover) {
  color: var(--accent-2);
}

.detail-article :deep(iframe) {
  width: 80%;
  aspect-ratio: 16 / 9;
  border: none;
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 100px;
}

.guide-info-box {
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.info-box-header {
  margin-bottom: 20px;
}

.info-box-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
  line-height: 1.3;
}

.guide-meta {
  margin-bottom: 16px;
}

.guide-navigation {
  padding: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.nav-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: var(--text);
}

.nav-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-card {
  display: block;
  padding: 16px;
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.nav-card:hover {
  background: rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateX(4px);
}

.nav-card-prev:hover {
  transform: translateX(-4px);
}

.nav-card-direction {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
}

.nav-card-meta {
  font-size: 12px;
  color: var(--muted);
}

.not-found {
  padding: 60px 40px;
  text-align: center;
}

.not-found h2 {
  font-size: 24px;
  margin: 0 0 12px 0;
}

.not-found p {
  color: var(--muted);
  margin: 0 0 24px 0;
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

@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .right-sidebar {
    position: static;
  }

  .guide-title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .guide-title {
    font-size: 1.75rem;
  }

  .detail-article :deep(h2) {
    font-size: 24px;
  }

  .detail-article :deep(h3) {
    font-size: 20px;
  }
}
</style>
