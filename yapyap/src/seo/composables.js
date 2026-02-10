import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { seoConfig } from './config.js'

/**
 * 加载数据模块（用于 SEO）
 */
const loadDataForSEO = async (dataType, locale = 'en') => {
  try {
    if (dataType === 'guide') {
      try {
        const module = await import(`../data/guide/${locale}.js`)
        return module
      } catch (e) {
        const module = await import('../data/guide/en.js')
        return module
      }
    } else {
      throw new Error(`Unknown data type: ${dataType}`)
    }
  } catch (error) {
    console.warn(`Failed to load data for SEO: ${dataType}`, error)
    return null
  }
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author || seoConfig.defaults.author)
    
    // Robots标签
    if (seo.robots) {
      updateMetaTag('robots', seo.robots)
    }

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image || seoConfig.defaults.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type || seoConfig.defaults.type, 'property')
    updateMetaTag('og:site_name', 'YAPYAP Game Guide', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image || seoConfig.defaults.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
    
    // Hreflang Tags
    updateHreflangTags()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 更新Hreflang标签
  const updateHreflangTags = () => {
    const locales = ['en', 'de', 'fr']
    const origin = window.location.origin
    const path = currentPath.value

    // 移除现有的 hreflang 标签
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove())

    // 清理当前路径中的语言前缀，获取"纯净"路径
    let cleanPath = path
    // 检查是否以 /de 开头（注意：要处理 /de 和 /de/ 的情况）
    if (cleanPath === '/de' || cleanPath.startsWith('/de/')) {
      cleanPath = cleanPath.substring(3)
    } else if (cleanPath === '/fr' || cleanPath.startsWith('/fr/')) {
      cleanPath = cleanPath.substring(3)
    }
    // 确保 cleanPath 以 / 开头（如果是空字符串，则设为 /）
    if (!cleanPath || cleanPath === '') {
      cleanPath = '/'
    } else if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath
    }
  
    locales.forEach(locale => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', locale)
      
      let href = ''
      if (locale === 'en') {
        href = `${origin}${cleanPath}`
      } else {
        // 避免出现 // 的情况
        const pathSuffix = cleanPath === '/' ? '' : cleanPath
        href = `${origin}/${locale}${pathSuffix}`
      }
      
      link.setAttribute('href', href)
      document.head.appendChild(link)
    })
    
    // 添加 x-default (通常指向默认语言 en)
    const xDefault = document.createElement('link')
    xDefault.setAttribute('rel', 'alternate')
    xDefault.setAttribute('hreflang', 'x-default')
    xDefault.setAttribute('href', `${origin}${cleanPath}`)
    document.head.appendChild(xDefault)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'YAPYAP Game Community',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/images/logo.webp`
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`
        ]
      }
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = 'Horror, Co-op, Voice-Activated'
      baseData.gamePlatform = ['PC']
      baseData.operatingSystem = ['Windows']
      baseData.applicationCategory = 'Game'
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'YAPYAP Game Community'
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    if (pageType === 'HowTo') {
      baseData.totalTime = 'PT10M'
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // 添加新的结构化数据
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 路由名称到SEO key的映射
const routeToSeoKey = {
  'home': 'home',
  'spells': 'spells',
  'spell-generator': 'spell-generator',
  'ball-puzzle': 'ball-puzzle',
  'balance-puzzle': 'balance-puzzle',
  'door-puzzle': 'door-puzzle',
  'guides': 'guides',
  'guide-detail': 'guideDetail',
  'wiki': 'wiki',
  'wiki-wands': 'wiki-wands',
  'wiki-bestiary': 'wiki-bestiary',
  'wiki-potions': 'wiki-potions',
  'privacy-policy': 'privacy-policy',
  'terms-of-service': 'terms-of-service',
  'copyright': 'copyright',
  'about-us': 'about-us',
  'contact-us': 'contact-us'
}

// 动态路由名称集合（需要从数据加载 SEO 的路由）
const dynamicRouteNames = new Set([
  'guide-detail'
])

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { locale, t, te } = useI18n()
  
  // 处理SEO的函数
  const handleSEO = async () => {
    const routeName = route.name
    const seoKey = routeToSeoKey[routeName]

    let finalSEOData = {
      ...seoConfig.defaults
    }

    // 先从路由 meta 中获取 SEO 数据
    if (route.meta?.seo) {
      finalSEOData = {
        ...finalSEOData,
        ...route.meta.seo
      }
    }

    // 从 i18n 中获取 SEO 数据 (覆盖 meta 配置)
    if (seoKey) {
      if (te(`tdk.${seoKey}.title`)) finalSEOData.title = t(`tdk.${seoKey}.title`)
      if (te(`tdk.${seoKey}.description`)) finalSEOData.description = t(`tdk.${seoKey}.description`)
      if (te(`tdk.${seoKey}.keywords`)) finalSEOData.keywords = t(`tdk.${seoKey}.keywords`)
      if (te(`tdk.${seoKey}.robots`)) finalSEOData.robots = t(`tdk.${seoKey}.robots`)
    }

    // 处理动态路由（需要从数据加载）
    if (dynamicRouteNames.has(routeName)) {
      try {
        let item = null
        
        if (routeName === 'guide-detail') {
          // 加载 guide 数据
          const module = await loadDataForSEO('guide', locale.value)
          if (module?.guides) {
            const guides = module.guides || []
            const slug = route.params.slug || ''
            
            item = guides.find(g => {
              if (!g.addressBar) return false
              // addressBar 现在不包含 /guides/ 前缀，直接匹配 slug
              return g.addressBar === slug
            })
          }
        }
        
        if (item) {
          if (item.seo) {
            finalSEOData = {
              ...finalSEOData,
              title: item.seo.title || item.title || finalSEOData.title,
              description: item.seo.description || item.description || finalSEOData.description,
              keywords: item.seo.keywords || finalSEOData.keywords,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
          } else {
            finalSEOData = {
              ...finalSEOData,
              title: item.title ? `${item.title} - YAPYAP Game` : finalSEOData.title,
              description: item.description || finalSEOData.description,
              image: item.imageUrl || finalSEOData.image,
              type: 'article'
            }
          }
        }
      } catch (error) {
        console.warn('Failed to load dynamic SEO data:', error)
      }
    }

    // 设置 SEO
    setSEO(finalSEOData)
    
    // 添加结构化数据
    const pageType = finalSEOData.type === 'article' ? 'Article' : 'WebPage'
    const structuredData = generateStructuredData(pageType)
    addStructuredData(structuredData)
  }
  
  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}
