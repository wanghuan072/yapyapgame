import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'
import fr from './locales/fr.js'
import zh from './locales/zh.js'
import ja from './locales/ja.js'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: {
    en,
    de,
    fr,
    zh,
    ja
  }
})

export default i18n
