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
          title: 'YAPYAP Wiki & Strategy Guide: Spells, Puzzles & Voice Tips',
          description: 'The ultimate unofficial resource for YAPYAP. Master voice spells, solve every puzzle, and survive the horror with our comprehensive wiki and coop strategies.',
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
          description: 'Browse the full YAPYAP Spells List for all Wands. Compare spell effects, cooldowns, and phonetics for commands like Up-Dog. Includes a free Mic Tester.',
          keywords: 'yapyap spells list, yapyap wands, yapyap spell effects, yapyap pronunciation, yapyap voice commands',
        },
      },
    },
    {
      path: '/spell-generator',
      name: 'spell-generator',
      component: SpellGeneratorView,
      meta: {
        seo: {
          title: 'YAPYAP Spell Generator: Pronunciation & Casting Tool',
          description: 'The ultimate casting simulator. Perfect your YAPYAP demo game pronunciation with standard audio. Learn how to use wands and fix voice recognition issues.',
          keywords: 'yapyap spell generator, yapyap demo game pronunciation, spell forge, voice practice, casting simulator',
        },
      },
    },
    {
      path: '/puzzles/ball-puzzle',
      name: 'ball-puzzle',
      component: BallPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Ball Puzzle Solution: Drop Room & Secret Wand',
          description: 'The complete YAPYAP Ball Puzzle guide. Master the Drop Room strategy: how to break the orb, avoid guards, and loot the hidden cabinet for a free wand.',
          keywords: 'yapyap ball puzzle, yapyap orb room, drop puzzle solution, secret wand location, teleport strategy',
        },
      },
    },
    {
      path: '/puzzles/balance-puzzle',
      name: 'balance-puzzle',
      component: BalancePuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Balance Puzzle: Resonance Dial & Pitch Guide',
          description: 'Solve the YAPYAP Balance Puzzle (Resonance Dial). Master high/low pitch voice commands, use the "Do-Do" rhythm, and destroy the orb for the wand.',
          keywords: 'yapyap balance puzzle, resonance dial, pitch puzzle, high low pitch, voice control, puzzle solution',
        },
      },
    },
    {
      path: '/puzzles/door-puzzle',
      name: 'door-puzzle',
      component: DoorPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Door Puzzle Solution: Face Gate & Symbols Guide',
          description: 'The complete YAPYAP Door Puzzle guide. Crack the "Face Gate" by finding hidden words like FLOAT. Fix voice recognition issues and loot the treasure room.',
          keywords: 'yapyap door puzzle, face gate solution, 3 words chant, skull symbol, high value loot, float spell',
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
      path: '/guides',
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
      path: '/guides/:slug',
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
