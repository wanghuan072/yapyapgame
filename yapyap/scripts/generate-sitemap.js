import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://yapyapgame.com'
}

// 基础路由配置（从 router/index.js 提取）
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/spells', name: 'spells', priority: 0.9, changefreq: 'weekly' },
  { path: '/spell-generator', name: 'spell-generator', priority: 0.8, changefreq: 'monthly' },
  { path: '/puzzles/ball-puzzle', name: 'ball-puzzle', priority: 0.8, changefreq: 'monthly' },
  { path: '/puzzles/balance-puzzle', name: 'balance-puzzle', priority: 0.8, changefreq: 'monthly' },
  { path: '/puzzles/door-puzzle', name: 'door-puzzle', priority: 0.8, changefreq: 'monthly' },
  { path: '/guide', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/wands', name: 'wiki-wands', priority: 0.7, changefreq: 'monthly' },
  { path: '/wiki/bestiary', name: 'wiki-bestiary', priority: 0.7, changefreq: 'monthly' },
  { path: '/wiki/potions', name: 'wiki-potions', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy-policy', name: 'privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', name: 'terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/about-us', name: 'about-us', priority: 0.4, changefreq: 'monthly' },
  { path: '/contact-us', name: 'contact-us', priority: 0.4, changefreq: 'monthly' }
]

// 动态加载数据
async function loadData() {
  const data = {
    guides: []
  }

  // 加载 guides 数据
  try {
    const guideModule = await import('../src/data/guide.js')
    data.guides = guideModule.guides || guideModule.default || []
  } catch (error) {
    console.warn('Failed to load guides:', error.message)
    data.guides = []
  }

  return data
}

// 生成URL XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = priority.toFixed(1)
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  // 加载数据
  const data = await loadData()

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由
  baseRoutes.forEach(route => {
    sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
  })

  // 为 guides 生成URL
  const guides = data.guides || []
  guides.forEach(guide => {
    if (!guide || !guide.addressBar) return
    // addressBar 不包含 /guides/ 前缀，需要添加
    const guidePath = `/guides/${guide.addressBar}`
    sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data...')
    
    console.log('🗺️  Generating sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 统计URL类型
    const baseUrlCount = baseRoutes.length
    const guideUrlCount = urlCount - baseUrlCount
    
    console.log('\n📊 URLs by type:')
    console.log(`   Base routes: ${baseUrlCount}`)
    console.log(`   Guide pages: ${guideUrlCount}`)
    console.log(`   Total: ${urlCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()
