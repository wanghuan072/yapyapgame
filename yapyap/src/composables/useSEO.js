import { watch } from 'vue'
import { useRoute } from 'vue-router'

// 默认 SEO 配置
const defaultSEO = {
  title: 'YAPYAP Game Ultimate Guide & Wiki - Master the Spells, Solve the Puzzles',
  description: 'The ultimate YAPYAP game resource. Complete spell pronunciation guide, puzzle solutions, wiki database, and voice command tips. Master the voice-activated spells and survive the tower.',
  keywords: 'YAPYAP game, YAPYAP spells, YAPYAP puzzle, YAPYAP wiki, voice activated spells, multiplayer horror game, steam co-op',
  image: '/images/og-image.webp',
  type: 'website'
}

// 更新单个 meta 标签
function updateMetaTag(name, content, attribute = 'name') {
  if (!content) return

  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (tag) {
    tag.setAttribute('content', content)
  } else {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    tag.setAttribute('content', content)
    document.head.appendChild(tag)
  }
}

// 更新 Canonical 链接
function updateCanonicalLink(url) {
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 设置页面 SEO 数据
  const setSEO = (seoData) => {
    const seo = {
      ...defaultSEO,
      ...seoData
    }

    // 更新 title
    document.title = seo.title || defaultSEO.title

    // 更新或创建 meta 标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', 'YAPYAP Game Community')

    // Open Graph 标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', `${window.location.origin}${route.path}`, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'YAPYAP Game Guide', 'property')

    // Twitter Card 标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')

    // Canonical URL
    updateCanonicalLink(`${window.location.origin}${route.path}`)
  }

  return {
    setSEO
  }
}

// 自动 SEO - 监听路由变化
export function useAutoSEO() {
  const route = useRoute()
  const { setSEO } = useSEO()

  // 处理 SEO
  const handleSEO = () => {
    // 从路由 meta 中获取 SEO 数据
    const seoData = route.meta?.seo || {}
    setSEO(seoData)
  }

  // 立即执行一次
  handleSEO()

  // 监听路由变化
  watch(
    () => route.path,
    () => {
      handleSEO()
    }
  )
}
