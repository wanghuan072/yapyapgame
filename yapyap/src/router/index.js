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
import PlaceholderView from '../views/PlaceholderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'YAPYAP Game Ultimate Guide & Wiki - Master the Spells, Solve the Puzzles',
          description: 'The ultimate YAPYAP game resource. Complete spell pronunciation guide, puzzle solutions, wiki database, and voice command tips. Master the voice-activated spells and survive the tower.',
          keywords: 'YAPYAP game, YAPYAP guide, YAPYAP wiki, YAPYAP spells, YAPYAP puzzle, voice activated spells, multiplayer horror game, steam co-op',
        },
      },
    },
    {
      path: '/spells',
      name: 'spells',
      component: SpellsView,
      meta: {
        seo: {
          title: 'YAPYAP Spells & Pronunciation Guide - Complete Voice Commands Database',
          description: 'Complete YAPYAP spells list with pronunciation guide. Learn all voice commands, spell effects, and pronunciation tips. Test your microphone and master the voice-activated magic system.',
          keywords: 'YAPYAP spells, YAPYAP pronunciation, voice commands, spell list, mic tester, voice activated spells, spell guide',
        },
      },
    },
    {
      path: '/spell-generator',
      name: 'spell-generator',
      component: SpellGeneratorView,
      meta: {
        seo: {
          title: 'YAPYAP Spell Generator - Video Tutorials & Practice Mode',
          description: 'Interactive YAPYAP spell generator with video tutorials. Watch spell demonstrations, learn correct pronunciation, and practice voice commands with our interactive spell generator.',
          keywords: 'YAPYAP spell generator, spell videos, spell tutorials, practice spells, spell demonstrations, voice command practice',
        },
      },
    },
    {
      path: '/puzzle/orb-drop-challenge',
      redirect: '/puzzle/ball-puzzle',
    },
    {
      path: '/puzzle/ball-puzzle',
      name: 'ball-puzzle',
      component: BallPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Ball Puzzle: Orb Drop Challenge Guide - Easy Solo Farm Room for Double Wands',
          description: 'Complete guide to the YAPYAP ball puzzle (Orb Drop Challenge). Learn the easiest solo farm room strategy to get 2 wands (chest + hidden cabinet). Teleport strategy, co-op tactics, and loot table included for this YAPYAP ball puzzle.',
          keywords: 'yapyap ball puzzle, YAPYAP orb drop challenge, orb drop puzzle, yapyap ball puzzle guide, solo farm room, double wands, teleport strategy, YAPYAP challenge guide, yapyap puzzle solution',
        },
      },
    },
    {
      path: '/puzzle/pitch-wheel',
      redirect: '/puzzle/balance-puzzle',
    },
    {
      path: '/puzzle/balance-puzzle',
      name: 'balance-puzzle',
      component: BalancePuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Balance Puzzle Guide - Voice Pitch Control with Do Re Mi',
          description: 'Complete guide to the YAPYAP balance puzzle (Pitch Wheel). Learn how to control the mechanism with pitch detection using the staccato method. Includes troubleshooting for microphone issues and co-op voice interference for this YAPYAP balance puzzle.',
          keywords: 'yapyap balance puzzle, YAPYAP pitch wheel, balance puzzle guide, pitch puzzle, voice pitch control, staccato method, microphone puzzle, YAPYAP voice control, yapyap balance puzzle solution',
        },
      },
    },
    {
      path: '/puzzle/face-door',
      redirect: '/puzzle/door-puzzle',
    },
    {
      path: '/puzzle/door-puzzle',
      name: 'door-puzzle',
      component: DoorPuzzleView,
      meta: {
        seo: {
          title: 'YAPYAP Door Puzzle Guide - Face Door & Treasure Room 500+ Points',
          description: 'Complete guide to the YAPYAP door puzzle (Face Door) and treasure room. Learn how to decode symbols, use voice recognition, and maximize loot with advanced techniques. 500+ points guaranteed reward for this YAPYAP door puzzle.',
          keywords: 'yapyap door puzzle, YAPYAP face door, door puzzle guide, treasure room, symbol decoder, voice recognition puzzle, high reward room, YAPYAP loot guide, yapyap door puzzle solution',
        },
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        seo: {
          title: 'YAPYAP Game Database & Wiki - Complete Items, Enemies, and Magic Guide',
          description: 'The complete YAPYAP game database. Browse wands, bestiary, potions, and crafting recipes. Learn about loot rarity, weight system, and sound mechanics.',
          keywords: 'YAPYAP wiki, YAPYAP database, YAPYAP wands, YAPYAP bestiary, YAPYAP crafting, game database, items database',
        },
      },
    },
    {
      path: '/wiki/wands',
      name: 'wiki-wands',
      component: WandsView,
      meta: {
        seo: {
          title: 'YAPYAP Wands List - Complete Wand Database with Spells & Effects',
          description: 'Complete YAPYAP wands database. Compare all wands, their spells, and passive effects. Find the best wand for your playstyle with our comprehensive guide.',
          keywords: 'YAPYAP wands, wand list, wand database, best wand, wand spells, wand effects, YAPYAP weapons',
        },
      },
    },
    {
      path: '/wiki/bestiary',
      name: 'wiki-bestiary',
      component: BestiaryView,
      meta: {
        seo: {
          title: 'YAPYAP Monsters Guide: How to Survive The Jester, Guards & Goblins',
          description: 'Complete enemy database for YAPYAP. Learn every monster\'s weakness, threat level, and the best spells (like Aero-bis & Duplico) to counter them.',
          keywords: 'yapyap monsters, how to kill guards, jester strategy, time ghost, yapyap enemies list',
        },
      },
    },
    {
      path: '/wiki/potions',
      name: 'wiki-potions',
      component: PotionsView,
      meta: {
        seo: {
          title: 'YAPYAP Potion Recipes: How to Craft Invisibility, Flight & Health Potions',
          description: 'Complete crafting guide for YAPYAP. Learn how to brew Vitality, Strength, and Flight potions using carrots, feathers, and mushrooms. Includes ingredient spawn locations and effects.',
          keywords: 'yapyap potion recipes, how to craft potions, invisibility potion, strength potion, yapyap carrot location',
        },
      },
    },
    {
      path: '/guide/overview',
      name: 'guides',
      component: GuidesView,
      meta: {
        seo: {
          title: 'YAPYAP Game Guides - Complete Strategy & Walkthrough Collection',
          description: 'Complete collection of YAPYAP game guides. Learn strategies, tips, and walkthroughs for puzzles, spells, survival, and co-op gameplay.',
          keywords: 'YAPYAP guides, YAPYAP walkthrough, game guides, strategy guide, YAPYAP tips, co-op guide',
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
      path: '/troubleshooting/mic-fix',
      name: 'troubleshooting-mic-fix',
      component: PlaceholderView,
      props: { title: 'Troubleshooting: Mic Fix Guide (Coming Soon)' },
      meta: {
        seo: {
          title: 'YAPYAP Microphone Fix Guide - Can\'t Hear Friends? Troubleshooting',
          description: 'Fix microphone issues in YAPYAP. Troubleshoot voice recognition problems, mic not working, voice delay, and can\'t hear friends issues. Complete troubleshooting guide.',
          keywords: 'YAPYAP mic fix, microphone not working, can\'t hear friends, voice recognition, mic troubleshooting, YAPYAP audio fix',
        },
      },
    },
  ],
})

export default router
