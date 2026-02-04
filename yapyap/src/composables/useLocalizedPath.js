import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export function useLocalizedPath() {
  const { locale } = useI18n()
  const route = useRoute()

  // Get path for a specific locale (for language switcher)
  const getPathForLocale = (targetLocale) => {
    const currentPath = route.fullPath
    const currentLocale = locale.value
    
    // If target is same as current, return current
    if (targetLocale === currentLocale) return currentPath
    
    // Remove current locale prefix if exists
    let pathWithoutLocale = currentPath
    if (currentLocale !== 'en' && pathWithoutLocale.startsWith(`/${currentLocale}`)) {
      pathWithoutLocale = pathWithoutLocale.replace(`/${currentLocale}`, '')
      if (pathWithoutLocale === '') pathWithoutLocale = '/'
    }
    
    // Add target locale prefix
    if (targetLocale === 'en') {
      return pathWithoutLocale
    } else {
      if (pathWithoutLocale === '/') return `/${targetLocale}`
      return `/${targetLocale}${pathWithoutLocale}`
    }
  }

  // Get localized path for a given path (for navigation links)
  const getLocalizedPath = (path) => {
    if (!path.startsWith('/')) path = '/' + path
    
    if (locale.value === 'en') return path
    
    if (path === '/') return `/${locale.value}`
    
    return `/${locale.value}${path}`
  }

  return {
    getPathForLocale,
    getLocalizedPath
  }
}
