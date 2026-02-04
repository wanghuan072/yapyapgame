import { createRouter, createWebHistory, RouterView } from 'vue-router'
import i18n from '../i18n'
import HomeView from '../views/HomeView.vue'
import SpellsView from '../views/SpellsView.vue'
import SpellGeneratorView from '../views/SpellGeneratorView.vue'
import BallPuzzleView from '../views/puzzles/BallPuzzleView.vue'
import BalancePuzzleView from '../views/puzzles/BalancePuzzleView.vue'
import DoorPuzzleView from '../views/puzzles/DoorPuzzleView.vue'
import WikiView from '../views/wiki/WikiView.vue'
import WandsView from '../views/wiki/WandsView.vue'
import BestiaryView from '../views/wiki/BestiaryView.vue'
import PotionsView from '../views/wiki/PotionsView.vue'
import GuidesView from '../views/GuidesView.vue'
import GuideDetailView from '../views/GuideDetailView.vue'
import PrivacyPolicyView from '../views/legal/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/legal/TermsOfServiceView.vue'
import CopyrightView from '../views/legal/CopyrightView.vue'
import AboutUsView from '../views/legal/AboutUsView.vue'
import ContactUsView from '../views/legal/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale(de|fr)?',
      component: RouterView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'spells',
          name: 'spells',
          component: SpellsView,
        },
        {
          path: 'spell-generator',
          name: 'spell-generator',
          component: SpellGeneratorView,
        },
        {
          path: 'puzzles/ball-puzzle',
          name: 'ball-puzzle',
          component: BallPuzzleView,
        },
        {
          path: 'puzzles/balance-puzzle',
          name: 'balance-puzzle',
          component: BalancePuzzleView,
        },
        {
          path: 'puzzles/door-puzzle',
          name: 'door-puzzle',
          component: DoorPuzzleView,
        },
        {
          path: 'wiki',
          name: 'wiki',
          component: WikiView,
        },
        {
          path: 'wiki/wands',
          name: 'wiki-wands',
          component: WandsView,
        },
        {
          path: 'wiki/bestiary',
          name: 'wiki-bestiary',
          component: BestiaryView,
        },
        {
          path: 'wiki/potions',
          name: 'wiki-potions',
          component: PotionsView,
        },
        {
          path: 'guides',
          name: 'guides',
          component: GuidesView,
        },
        {
          path: 'guides/:slug',
          name: 'guide-detail',
          component: GuideDetailView,
        },
        {
          path: 'privacy-policy',
          name: 'privacy-policy',
          component: PrivacyPolicyView,
        },
        {
          path: 'terms-of-service',
          name: 'terms-of-service',
          component: TermsOfServiceView,
        },
        {
          path: 'copyright',
          name: 'copyright',
          component: CopyrightView,
        },
        {
          path: 'about-us',
          name: 'about-us',
          component: AboutUsView,
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: ContactUsView,
        },
      ]
    }
  ],
})

// Navigation guard to set locale based on route param
router.beforeEach((to, from, next) => {
  const locale = to.params.locale || 'en'
  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale
  }
  next()
})

export default router
