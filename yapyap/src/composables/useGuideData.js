import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const guidesData = ref([])
const loading = ref(false)
const error = ref(null)
let loadedLocale = null

/**
 * Guide 数据 composable
 */
export function useGuideData() {
  const { locale } = useI18n()

  const loadData = async () => {
    // 如果已经加载了当前语言的数据，就不再重复加载
    if (loadedLocale === locale.value && guidesData.value.length > 0) return

    loading.value = true
    error.value = null
    try {
      const module = await import(`@/data/guide/${locale.value}.js`)
        .catch(() => import('@/data/guide/en.js'))
      
      const guides = module.guides || module.default || []
      guidesData.value = Array.isArray(guides) ? guides : []
      loadedLocale = locale.value
    } catch (err) {
      console.error('Failed to load guide data:', err)
      error.value = err.message || 'Failed to load guide data'
      guidesData.value = []
    } finally {
      loading.value = false
    }
  }

  // 监听语言变化自动重新加载
  watch(locale, loadData, { immediate: true })

  const findGuideByAddressBar = (addressBar) => {
    if (!addressBar) return null
    // addressBar 现在不包含 /guides/ 前缀，直接匹配
    const cleanAddressBar = addressBar.replace(/^\/guides\//, '').replace(/^\/guide\//, '').replace(/^\//, '')
    return guidesData.value.find(g => g.addressBar === cleanAddressBar) || null
  }

  const findGuideById = (id) => {
    return guidesData.value.find(g => g.id === id) || null
  }

  return {
    guides: guidesData,
    loading,
    error,
    loadData,
    findGuideByAddressBar,
    findGuideById
  }
}
