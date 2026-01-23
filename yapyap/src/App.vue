<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useAutoSEO } from './seo/composables.js'

// 启用自动 SEO
useAutoSEO()
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  background: transparent;
}
</style>
