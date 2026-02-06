import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// Global state to share data between components
const wands = ref([])
const isLoading = ref(false)
let loadedLocale = null

export function useWands() {
  const { locale } = useI18n()

  const loadData = async () => {
    // Avoid reloading if already loaded for current locale
    if (loadedLocale === locale.value && wands.value.length > 0) return
    
    isLoading.value = true
    try {
      // Try to load current locale, fallback to 'en'
      let module = await import(`@/data/wands/${locale.value}.js`)
        .catch(() => import('@/data/wands/en.js'))
      
      wands.value = module.wands || module.default || []
      
      loadedLocale = locale.value
    } catch (e) {
      console.error('Failed to load wands data:', e)
      // If everything fails, ensure we don't leave it in loading state
      if (wands.value.length === 0) {
        // Optional: try to force load en if not already tried
      }
    } finally {
      isLoading.value = false
    }
  }

  // Watch for locale changes to reload data
  watch(locale, () => {
    loadData()
  }, { immediate: true })

  return {
    wands,
    isLoading
  }
}
