import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'YAPYAP Guide & Wiki: Release Date, Demo & Strategies',
          description: 'The #1 unofficial guide for YAPYAP. Track the Feb 3, 2026 release, get Steam Demo tips, and master voice commands in this chaotic coop horror game.',
          keywords: 'yapyap game, yapyap steam, yapyap release date, yapyap demo, maison bap, coop horror game, yapyap guide',
        },
      },
    },
    {
      path: '/spells',
      name: 'spells',
      component: SpellsView,
      meta: {
        seo: {
          title: 'YAPYAP Spells List: Voice Commands & Pronunciation Guide',
          description: 'Complete list of YAPYAP spells like Up-Dog and Aero-Bis. Listen to audio, learn phonetics, and stop fizzling your magic with our casting guide.',
          keywords: 'yapyap spells list, yapyap pronunciation, yapyap voice commands, yapyap magic words, how to cast spells in yapyap',
        },
      },
    },
    {
      path: '/spell-generator',
      name: 'spell-generator',
      component: SpellGeneratorView,
      meta: {
        seo: {
          title: 'YAPYAP Spell Forge: Simulator & Pronunciation Trainer',
          description: 'Test wands and incantations in our unofficial Spell Forge. Master phonetics for spells like Lux-Ana and view casting animations before playing.',
          keywords: 'yapyap spell generator, yapyap simulator, spell forge, practice yapyap spells, yapyap wand types',
        },
      },
    },
    {
      path: '/puzzle/ball-puzzle',
      name: 'ball-puzzle',
      component: BallPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Orb Puzzle Solution: Drop Room Strategy Guide',
          description: 'How to solve the Orb Drop puzzle in YAPYAP. Master the "Teleport Strategy" to break the ball, kite guards, and loot the secret cabinet wand safely.',
          keywords: 'yapyap orb puzzle, ball room, drop puzzle, teleport wand strategy',
        },
      },
    },
    {
      path: '/puzzle/balance-puzzle',
      name: 'balance-puzzle',
      component: BalancePuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Scales Puzzle Solution: Weight & Balance Guide',
          description: 'Stuck on the Scales? The complete solution for the YAPYAP Balance Puzzle. Learn the correct item weights and combinations to unlock the gate fast.',
          keywords: 'yapyap scales puzzle, balance puzzle, weight solution, resonance dial',
        },
      },
    },
    {
      path: '/puzzle/door-puzzle',
      name: 'door-puzzle',
      component: DoorPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Face Gate Solution: 3-Word Chant & Symbols',
          description: 'Crack the Face Gate in YAPYAP. Guide to finding hidden symbols (Skull, Crossbones), deciphering the 3-word chant, and fixing voice recognition bugs.',
          keywords: 'yapyap face gate, door puzzle, skull symbol, float spell, 3 words puzzle',
        },
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        seo: {
          title: 'YAPYAP Wiki Database: Monsters, Items & Loot Values',
          description: 'Unofficial database for YAPYAP monsters (Bestiary) and item values. Discover hidden mechanics, crafting recipes, and lore secrets from Maison Bap.',
          keywords: 'yapyap wiki, yapyap monsters, yapyap items, yapyap loot value, yapyap bestiary, duplico, jester',
        },
      },
    },
    {
      path: '/wiki/wands',
      name: 'wiki-wands',
      component: WandsView,
      meta: {
        seo: {
          title: 'YAPYAP Wands Tier List: All Stats, Effects & Passives',
          description: 'The complete YAPYAP Wands database. Compare stats for Storm, Tarot, and Astral wands. Find the best loadout for cast speed, range, and teleporting.',
          keywords: 'yapyap wands list, best wands, tarot wand, storm wand, wand stats',
        },
      },
    },
    {
      path: '/wiki/bestiary',
      name: 'wiki-bestiary',
      component: BestiaryView,
      meta: {
        seo: {
          title: 'YAPYAP Bestiary: All Monsters, Weaknesses & Survival',
          description: 'Survive the darkness with our YAPYAP Bestiary. Detailed guide on all monsters including the Jester and Duplico. Learn their attack patterns and counters.',
          keywords: 'yapyap monsters, bestiary, jester guide, duplico, how to kill monsters',
        },
      },
    },
    {
      path: '/wiki/potions',
      name: 'wiki-potions',
      component: PotionsView,
      meta: {
        seo: {
          title: 'YAPYAP Potions Guide: All Recipes, Effects & Crafting',
          description: 'Complete list of YAPYAP potions and consumables. Discover crafting recipes, status effects, and where to find ingredients for essential brews.',
          keywords: 'yapyap potions, crafting recipes, consumables, ingredients, alchemy',
        },
      },
    },
    {
      path: '/guide/overview',
      name: 'guides',
      component: GuidesView,
      meta: {
        seo: {
          title: 'YAPYAP Guides: Mic Fixes, Survival Tips & How to Revive',
          description: 'Essential YAPYAP gameplay guides. Fix "can\'t hear friends" mic issues, learn how to revive teammates, and survive the Jester and Duplico.',
          keywords: 'yapyap mic fix, yapyap multiplayer not working, how to revive in yapyap, yapyap beginner guide, yapyap survival tips',
        },
      },
    },
    {
      path: '/guide/:slug',
      name: 'guide-detail',
      component: GuideDetailView,
      // SEO will be set dynamically from guide data
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        seo: {
          title: 'Privacy Policy - YAPYAP Game Guide Hub - yapyapgame.com',
          description: 'Privacy Policy for YAPYAP Game Guide Hub. Learn how we collect, use, and protect your personal information when you visit our website.',
          keywords: 'privacy policy, YAPYAP game, data protection, privacy',
          robots: 'noindex, nofollow',
        },
      },
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
      meta: {
        seo: {
          title: 'Terms of Service - YAPYAP Game Guide Hub - yapyapgame.com',
          description: 'Terms of Service for YAPYAP Game Guide Hub. Read our terms and conditions for using our website and services.',
          keywords: 'terms of service, YAPYAP game, terms and conditions, user agreement',
          robots: 'noindex, nofollow',
        },
      },
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: {
        seo: {
          title: 'Copyright - YAPYAP Game Guide Hub - yapyapgame.com',
          description: 'Copyright information for YAPYAP Game Guide Hub. Learn about our copyright policies and intellectual property rights.',
          keywords: 'copyright, YAPYAP game, intellectual property, DMCA, fair use',
          robots: 'noindex, nofollow',
        },
      },
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
      meta: {
        seo: {
          title: 'About Us - YAPYAP Game Guide Hub - yapyapgame.com',
          description: 'Learn about YAPYAP Game Guide Hub, an unofficial community resource for YAPYAP game. Discover our mission, what we offer, and how we help players.',
          keywords: 'about YAPYAP Game Guide Hub, YAPYAP game community, YAPYAP resources, YAPYAP fan site',
          robots: 'noindex, nofollow',
        },
      },
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
      meta: {
        seo: {
          title: 'Contact Us - YAPYAP Game Guide Hub - yapyapgame.com',
          description: 'Contact YAPYAP Game Guide Hub. Get in touch with us for questions, suggestions, feedback, or inquiries about our website and services.',
          keywords: 'contact YAPYAP Game Guide Hub, YAPYAP game support, YAPYAP community contact',
          robots: 'noindex, nofollow',
        },
      },
    },
  ],
})

export default router
